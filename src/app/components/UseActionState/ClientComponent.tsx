"use client";

import { useActionState } from 'react';
import { updateName } from './serverActions';

export const ClientComponent = () => {
  const [state, submitAction, isPending] = useActionState(updateName, { error: null, data: null });

  return (
    <form action={submitAction}>
      <input type="text" name="name" disabled={isPending}/>
      {state.error && <span>Failed: {state.error}</span>}
    </form>
  );
}
