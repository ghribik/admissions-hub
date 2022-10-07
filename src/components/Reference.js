import React, { useState } from "react";
import styles from "./Reference.module.css";
const Reference = ({
  variables,
  arrays,
  setVariables,
  setArrays,
  operators,
  setOperators,
  conditionals,
  setConditionals,
  loops,
  setLoops,
  accumulator,
  setAccumulator,
  extraResources,
  setExtraResources,
}) => {
  const handleChange = (event) => {
    setExtraResources(event.target.value);
  };

  return (
    <div>
      <span style={{ fontSize: 12 }}>Suggested Study Material</span>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.referenceGrid}>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setVariables(!variables);
                }}
                type="checkbox"
              ></input>

              <span style={{ paddingLeft: 5 }} className={styles.checkmark}>
                Variables
              </span>
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setArrays(!arrays);
                }}
                type="checkbox"
              ></input>

              <span style={{ paddingLeft: 5 }} className={styles.checkmark}>
                Arrays & Objects
              </span>
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setOperators(!operators);
                }}
                type="checkbox"
              ></input>
              <span style={{ paddingLeft: 5 }} className={styles.checkmark}>
                Operators And Methods
              </span>
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setConditionals(!conditionals);
                }}
                type="checkbox"
              ></input>

              <span style={{ paddingLeft: 5 }} className={styles.checkmark}>
                Conditionals
              </span>
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setLoops(!loops);
                }}
                type="checkbox"
              ></input>
              <span style={{ paddingLeft: 5 }} className={styles.checkmark}>
                Loops
              </span>
            </label>
          </div>
          <div>
            <label className={styles.container}>
              <input
                onClick={() => {
                  setAccumulator(!accumulator);
                }}
                type="checkbox"
              ></input>
              <span style={{ paddingLeft: 10 }} className={styles.checkmark}>
                Accumulator Pattern
              </span>
            </label>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          onChange={handleChange}
          value={extraResources}
          placeholder="Insert external link"
          type="text"
          style={{ width: 400, height: 32, fontSize: 12 }}
        ></input>
      </div>
    </div>
  );
};

export default Reference;
