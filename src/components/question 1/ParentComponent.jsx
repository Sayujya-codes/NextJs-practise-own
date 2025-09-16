import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const obj1 = () => {
    return "Subject one";
  };

  const obj2 = () => {
    return "Subject two";
  };

  const obj3 = () => {
    return "Subject three";
  };
  return (
    <>
      <div>
        <ChildComponent title={obj1()} />
      </div>

      <div>
        <ChildComponent title2={obj2()} />
      </div>

      <div>
        <ChildComponent title3={obj3()} />
      </div>
    </>
  );
};

export default ParentComponent;
