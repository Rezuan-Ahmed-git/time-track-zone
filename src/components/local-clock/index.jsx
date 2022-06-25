import ClockDisplay from "../shared/clock-display";

const LocalClock = ({ date, offset, timezone }) => {
    return (
        <div>
            <ClockDisplay date={date} title={'My Clock'} offset={offset} timezone={timezone} />
        </div>
    );
};

export default LocalClock;