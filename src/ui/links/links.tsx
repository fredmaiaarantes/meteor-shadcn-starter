import React from "react";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { LinksCollection, Link } from "../../api/links/links";
import { Button } from "@/components/button";
import { CreateLinkForm } from "./link-form";
import { toast } from "@/hooks/use-toast";
import { LinksApi } from "./links.api";

export function Links() {
  const isLoading = useSubscribe("links");
  const links = useFind(() => LinksCollection.find());

  const handleRemove = async (linkId: string) => {
    try {
      await LinksApi.remove(linkId);
      toast({
        title: "Success",
        description: "Link has been removed",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to remove link",
      });
    }
  };

  const LinkItem = (link: Link) => {
    return (
      <li key={link._id} className="flex items-center justify-between py-2">
        <Button variant="link" asChild>
          <a href={link.url} target="_blank">{link.title}</a>
        </Button>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => link._id && handleRemove(link._id)}
        >
          Remove
        </Button>
      </li>
    );
  };

  return (
    <div className="mt-10 max-w-xl">
      <div className="mb-8">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Create New Link
        </h2>
        <CreateLinkForm />
      </div>

      <div>
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          All Links
        </h2>
        <div className="mt-4">
          {isLoading() ? (
            <div>Loading links...</div>
          ) : (
            <ul className="divide-y">
              {links.map(LinkItem)}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
