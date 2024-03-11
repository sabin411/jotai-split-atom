"use client";

import CardListWithState from "@/containers/CardListWithState";
import CardListWithSplitAtom from "@/containers/CardListWithSplitAtom";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-start items-center gap-10">
      <CardListWithState />
      <CardListWithSplitAtom />
    </div>
  );
}
