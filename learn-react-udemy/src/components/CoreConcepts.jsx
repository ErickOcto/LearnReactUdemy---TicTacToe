import { CORE_CONCEPTS } from "../data.js";
import CoreConcept from "../components/CoreConcept";

const data = CORE_CONCEPTS;

export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {data.map((data, index) => (
            <CoreConcept key={index++} {...data} />
          ))}
        </ul>
      </section>
    </>
  );
}
