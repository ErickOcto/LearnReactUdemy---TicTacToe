export default function durationInput({ userInput, onEdit }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            min={0}
            required
            value={userInput.initialInvestment}
            onChange={(e) => onEdit("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            min={0}
            required
            value={userInput.annualInvestment}
            onChange={(e) => onEdit("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            min={0}
            required
            value={userInput.expectedReturn}
            onChange={(e) => onEdit("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            min={1}
            required
            value={userInput.duration}
            onChange={(e) => onEdit("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
