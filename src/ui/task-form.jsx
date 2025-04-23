import React, { useState, FormEvent } from 'react';
import { Meteor } from 'meteor/meteor';
import { Button } from './components/button';
import { Input } from './components/input';

export function TaskForm() {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Meteor.callAsync('createTask', { description });
      setDescription('');
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <form className="flex gap-2 mt-4" onSubmit={handleSubmit}>
      <Input placeholder="Type a new task" value={description} required
        onChange={(e) => setDescription(e.target.value)}  />
      <Button type="submit">Add</Button>
    </form>
  );
}
