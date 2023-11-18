function Column({ children, span = 12 }) {
  const handleCalculateCol = (col) => {
    let colSpan = 12 / col;
    return 100 / colSpan + "%";
  };

  return <div className={`px-1 `}>{children}</div>;
}

export default Column;
