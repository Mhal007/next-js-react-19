import { Suspense } from "react";

import { FormClientAction } from '@/app/components/FormClientAction';
import { Parent as HoistedPromisesParent } from '@/app/components/HoistedPromises/Parent';
import { SuspenseTestClient } from '@/app/components/Suspense/SuspenseTestClient';
import { AsyncComponent } from './components/AsyncComponent/AsyncComponent';
import { Button } from "./components/Button";
import { ClientComponent } from "./components/ClientAndServer/ClientCoponent";
import { ServerComponent } from "./components/ClientAndServer/ServerComponent";
import { ClientComponent as ClientComponentServerActionImported } from "./components/ClientComponentServerActionImported/ClientComponent";
import { ServerComponent as ServerComponentServerActionPassed } from "./components/ClientComponentServerActionPassed/ServerComponent";
import { FormServerAction } from "./components/FormServerAction";
import { ServerNotes } from "./components/InteractiveComposition/ServerNotes";
import { ServerNotesBeforeComposition } from "./components/InteractiveComposition/ServerNotesBeforeComposition";
import { ServerComponent as PromisePassedToClientServerComponent } from "./components/PromisePassedToClient/ServerComponent";
import { SimpleAction } from "./components/SimpleAction";
import { SuspenseTest } from './components/Suspense/SuspenseTest';
import { SuspenseLongRenderContainer } from "./components/SuspenseLongRender/SuspenseLongRenderContainer";
import {UseOptimisticWithState} from '@/app/components/UseOptimistic/UseOptimisticWithState';
import { UseOptimistic } from "./components/UseOptimistic/UseOptimistic";

export default function Home() {
  const myOnClick = async () => {
    "use server";
    // test
    console.log('test')
  }

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <Button onClick={myOnClick} />
      <SuspenseTestClient />
      <SuspenseLongRenderContainer />
      <FormServerAction />
      <SuspenseTest />
      <AsyncComponent />
      <ServerComponent />
      <ClientComponent />
      <Suspense fallback={<div>Loading server notes...</div>}>
        <ServerNotesBeforeComposition />
      </Suspense>
      <Suspense fallback={<div>Loading interactive server notes...</div>}>
        <ServerNotes />
      </Suspense>
      <SimpleAction />
      <PromisePassedToClientServerComponent />
      <HoistedPromisesParent />
      <FormClientAction />
      <ClientComponentServerActionImported />
      <ServerComponentServerActionPassed />
      <UseOptimistic />
      <UseOptimisticWithState />
    </div>
  );
}
