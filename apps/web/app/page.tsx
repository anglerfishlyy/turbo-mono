
import { TextInput } from "@repo/ui"; 

export default function Home() {
  return (
    <div style={{height: "100vw", width: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}> 
    //instead of creating a new component, we can just use the TextInput component directly here, we put that component  in ui package , improves design system
     <TextInput placeholder="room name"></TextInput>
     <button>Join room</button>
    </div>
  );
}
