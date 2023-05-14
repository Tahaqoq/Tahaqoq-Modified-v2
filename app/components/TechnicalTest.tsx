const TechnicalTest = ({ test }: any) => {
  const {
    testNo,
    title,
    handleChange,
    inputName1,
    inputName2,
    inputValue1,
    inputValue2,
  } = test;
  return (
    <tr>
      <th className="">{testNo}</th>
      <td className="max-w-min">{title}</td>
      <td>
        <div className="inline-flex items-center gap-4">
          <label className="space-x-2 cursor-pointer label">
            <input
              type="radio"
              name={inputName1}
              value={"no"}
              onChange={handleChange}
              className="radio checked:bg-success"
              checked={!inputValue1}
            />
            <span className="label-text">NO</span>
          </label>

          <label className="space-x-2 cursor-pointer label ">
            <input
              type="radio"
              name={inputName1}
              value="yes"
              onChange={handleChange}
              className="radio checked:bg-error"
              checked={inputValue1}
            />
            <span className="label-text">YES</span>
          </label>
        </div>
      </td>
      <td>
        <div className="inline-flex items-center gap-4">
          <label className="space-x-2 cursor-pointer label ">
            <input
              type="radio"
              name={inputName2}
              value="pass"
              onChange={handleChange}
              className="radio checked:bg-success"
              checked={inputValue2 === true}
            />
            <span className="label-text">PASS</span>
          </label>
          <label className="space-x-2 cursor-pointer label ">
            <input
              type="radio"
              name={inputName2}
              value="fail"
              onChange={handleChange}
              className="radio checked:bg-error"
              checked={inputValue2 === false}
            />
            <span className="label-text">FAIL</span>
          </label>
        </div>
      </td>
    </tr>
  );
};

export default TechnicalTest;
