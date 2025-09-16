const ChildComponent = (props) => {
  return (
    <>
      <div>
        <div style={{ background: "#FFFDD0" }}>
          <h1>{props.title}</h1>
          <h1>{props.title2}</h1>
        </div>

        <div style={{ background: "pink" }}>
          <h1>{props.title3}</h1>
        </div>
      </div>
    </>
  );
};

export default ChildComponent;
