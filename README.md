CONSOLE ONLY:

highestG(data);
highestAllAxesWithTime(data);


OTHER:

1in1, dataOnTheY  - {
forceXTime(data, start, stop, multiX, multiY, dropDataPoints);
forceYTime(data, start, stop, multiX, multiY, dropDataPoints);
forceZTime(data, start, stop, multiX, multiY, dropDataPoints);
forceXTimeRedline(data, start, stop, multiX, multiY, dropDataPoints, redlineG) ;
}

1in1, dataXy - {
forceXy(data, start, stop, multiX, multiY, dropDataPoints);
forceXyTime(data, start, stop, multiX, multiY, dropDataPoints);
forceXyTimeX(data, start, stop, multiX, multiY, dropDataPoints);
}

3in1, dataXyzOnTheY - {
forceXyzTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints);
forceXyzAdjustableTimeXyz(data, start, stop, multiX, multiY, multiZ, multiTime, dropDataPoints);
}
