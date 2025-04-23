import React, { Suspense } from 'react';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks';
import { useSubscribe, useFind } from 'meteor/react-meteor-data/suspense';
import { TaskForm } from './task-form';
import { ScrollArea } from './components/scroll-area';
import { Card } from './components/card';

export function App() {
  useSubscribe("tasks");
  const tasks = useFind(Tasks, [{}]);
  const removeTask = async (_id) => {
    await Meteor.callAsync("removeTask", { _id });
  };
  return (
    <main className='p-2 mx-auto max-w-xl'>
      <h1 className='text-xl font-bold'>My Tasks App</h1>
        <TaskForm />
        <ScrollArea className="h-64 border rounded-xl p-2 mt-2">
          <div className="space-y-2 text-sm">
            <Suspense fallback={<div>Loading...</div>}>
              {tasks.map(task => (
                <Card key={task._id} className="p-3 border flex justify-between">
                  {task.description}
                  <button onClick={() => removeTask(task._id)} className='text-red-500'>Remove</button>
                </Card>
              ))}
            </Suspense>
          </div>
        </ScrollArea>
    </main>
  );
}

