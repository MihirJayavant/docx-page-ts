import React, { useState, useEffect } from "react";
import { Page } from "./Page";
import { IStore, getDefaultStore, storeSubject } from "./core/store";

export const Pages = () => {
  const [store, setStore] = useState<IStore>(getDefaultStore());

  useEffect(() => {
    const sub = storeSubject.subscribe(s => setStore(s));
    return () => sub.unsubscribe();
  }, [store]);

  return (
    <div className="pages">
      {store.pages.map((p, i) => (
        <Page key={i}/>
      ))}
    </div>
  );
};
