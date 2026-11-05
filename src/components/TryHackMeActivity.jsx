
import "./TryHackMeActivity.css";
import snapshot from "../data/tryhackme-activity.json";

// Preserve the public calendar's intensity levels without inventing daily counts.
const activity = Object.fromEntries(Object.entries(snapshot.daysByLevel).flatMap(
  ([level, days]) => days.map(day => [new Date(Date.UTC(snapshot.year, 0, day)).toISOString().slice(0, 10), Number(level)])
));
const labels = ["No activity", "Low activity", "Moderate activity", "High activity", "Very high activity"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function TryHackMeActivity() {
  const year = snapshot.year;
  const start = new Date(Date.UTC(year, 0, 1));
  const end = new Date(Date.UTC(year + 1, 0, 1));

  const days = [];

  // Align the first day with the correct weekday.
  for (let i = 0; i < start.getUTCDay(); i++) {
    days.push(null);
  }

  for (
    let date = new Date(start);
    date < end;
    date.setUTCDate(date.getUTCDate() + 1)
  ) {
    days.push(date.toISOString().slice(0, 10));
  }

  return (
    <div className="thm-activity">
      <div className="thm-heading">
        <h3>TryHackMe yearly activity</h3>
        <span>{year}</span>
      </div>

      <p>{snapshot.totalEvents.toLocaleString("en-US")} events · {Object.keys(activity).length} active days</p>
      <div className="thm-scroll" tabIndex={0} role="region" aria-label={`${year} activity calendar; scroll to view all months`}>
        <div className="thm-months" aria-hidden="true">
          {months.map((month, index) => <span key={month} style={{gridColumnStart: Math.floor(((Date.UTC(year, index, 1) - start.getTime()) / 86400000 + start.getUTCDay()) / 7) + 1}}>{month}</span>)}
        </div>
        <div className="thm-grid">
          {days.map((date, index) => {
            const level = activity[date] ?? 0;
            const future = date > snapshot.updatedAt;
            const label = date ? `${date}: ${future ? "After last update" : labels[level]}` : undefined;

            return (
              <div
                key={date ?? `empty-${index}`}
                className={`thm-cell ${!date ? "thm-empty" : future ? "thm-future" : `level-${level}`}`}
                title={label}
                aria-label={label}
                role={date ? "img" : undefined}
                aria-hidden={!date || undefined}
              />
            );
          })}
        </div>
      </div>

      <div className="thm-footer">
        <a href={snapshot.profileUrl} target="_blank" rel="noopener noreferrer">View TryHackMe profile ↗</a>
        <div className="thm-legend" aria-label="Activity intensity from less to more"><span>Less</span>{labels.map((label, level) => <span key={label} className={`thm-cell level-${level}`} title={label} />)}<span>More</span></div>
      </div>
      <p className="thm-caption">Saved activity snapshot · Last updated <time dateTime={snapshot.updatedAt}>{snapshot.updatedAt}</time></p>
    </div>
  );
}
