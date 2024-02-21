export default function Log({ turn }) {
  return (
    <ol id="log">
      {turn.map((turnData) => (
        <li key={`${turnData.square.row}${turnData.square.col}`}>
          {turnData.player} selected {turnData.square.row},{" "}
          {turnData.square.col}
        </li>
      ))}
    </ol>
  );
}
