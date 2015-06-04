CONSOLE ONLY:
  highestG(data);
  highestAllAxesWithTime(data);

OTHER:
  forceXy(data, start, stop, multiX, multiY, dropDataPoints);
  // XY points, multiX and multiY available as multipliers for data

  forceXyTimeX(data, start, stop, multiX, multiY, dropDataPoints);
  // XY points, multiX and multiY available as multipliers for data
  // i added and auto-incremented to X axis for time

  forceXyzTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints);
  // 3 horizontal sets for XYZ, moving along X for time with multiTime
  // multiTime only available on X axis. Auto space between all on Y axis.

  forceXyzAdjustableTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints);
  // 3 sets for XYZ, moving along X
  // multiTime available for XYZ

DATA:
  