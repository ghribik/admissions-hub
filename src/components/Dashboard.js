import React, { useState } from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";
import styles from "./AllRatings.module.css";
import RoomURL from "./RoomURL";

const Dashboard = ({ input }) => {
  const [value, setValue] = useState(0);
  const [problem1Notes, setProblem1Notes] = useState("");
  const [problem2Notes, setProblem2Notes] = useState("");
  const [problem3Notes, setProblem3Notes] = useState("");

  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);
  const [extraResources, setExtraResources] = useState("");

  let totalPercent = `${((value / 12) * 100).toFixed(0)}%`;

  const variablesLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/08-variables/00-section-overview.md";
  const arraysLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/09-Objects/00-section-overview.md";
  const operatorsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/10-Operators-and-Methods/00-section-overview.md";
  const conditionalsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/11-Conditionals/00-section-overview.md";
  const loopsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/12-loops/00-section-overview.md";
  const accumulatorLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/13-Accumulator-Pattern/00-section-overview.md";

  let postRequest = {
    totalPercent: totalPercent,
    problem1Notes: problem1Notes,
    problem2Notes: problem2Notes,
    problem3Notes: problem3Notes,
  };

  let studyMaterial = {};

  if (variables) {
    studyMaterial.variables = variablesLink;
  }
  if (arrays) {
    studyMaterial.arrays = arraysLink;
  }
  if (operators) {
    studyMaterial.operators = operatorsLink;
  }
  if (conditionals) {
    studyMaterial.conditionals = conditionalsLink;
  }
  if (loops) {
    studyMaterial.loops = loopsLink;
  }
  if (accumulator) {
    studyMaterial.accumulator = accumulatorLink;
  }
  if (extraResources !== "") {
    studyMaterial.extraResources = extraResources;
  }
  return (
    <div className={styles}
      style={{
        // float: "right",
        width: "420px",
        height: "100%",
        zIndex: "1",
        padding: "10px 10px 0px",
        position: "sticky",
        backgroundColor: "white",

      }}
    >
      {/* <RoomURL /> */}
      <Problems
        problem1Notes={problem1Notes}
        problem3Notes={problem3Notes}
        problem2Notes={problem2Notes}
        setProblem1Notes={setProblem1Notes}
        setProblem2Notes={setProblem2Notes}
        setProblem3Notes={setProblem3Notes}
      />
      <Ratings setValue={setValue} />
      <Reference
        variables={variables}
        arrays={arrays}
        setVariables={setVariables}
        setArrays={setArrays}
        operators={operators}
        setOperators={setOperators}
        conditionals={conditionals}
        setConditionals={setConditionals}
        loops={loops}
        setLoops={setLoops}
        accumulator={accumulator}
        setAccumulator={setAccumulator}
        extraResources={extraResources}
        setExtraResources={setExtraResources}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: 2,
        }}
      >
        <button className={styles.bob} id={styles.complete}
          onClick={() => {
            console.log("postRequest", postRequest);
            console.log("Code Editor", input);
            if (Object.keys(studyMaterial).length !== 0) {
              console.log("studyMaterial", studyMaterial);
            }
          }}
          style={{
            width: 220,
            height: 40,
            color: "white",
            backgroundColor: "#DD8D43",
            border: "none",
            fontSize: 16,
            fontFamily: "League Spartan"
          }}
        >
          Complete Interview
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
