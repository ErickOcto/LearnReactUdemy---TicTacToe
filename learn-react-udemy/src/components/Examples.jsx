import TabButton from "../components/TabButton";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";
import { useState } from "react";
import Section from "./Section.jsx";
const examples = EXAMPLES;

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <>
      <Section id="examples" title="Example">
        <Tabs
          buttons={       
        <>
          <TabButton
            status={selectedTopic === "components"}
            onClick={() => handleClick("components")}
          >
            Components
          </TabButton>
          <TabButton
            status={selectedTopic === "jsx"}
            onClick={() => handleClick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            status={selectedTopic === "props"}
            onClick={() => handleClick("props")}
          >
            Props
          </TabButton>
          <TabButton
            status={selectedTopic === "state"}
            onClick={() => handleClick("state")}
          >
            State
          </TabButton>
        </>
        }
        >
          {!selectedTopic ? (
            "please select a topic"
          ) : (
            <div id="tab-content">
              <h3>{examples[selectedTopic].title}</h3>
              <p>{examples[selectedTopic].description}</p>
              <pre>
                <code>{examples[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
}
