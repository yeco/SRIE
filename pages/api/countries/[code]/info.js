import nextConnect from 'next-connect';
import IndicatorDataService from '../../../../services/IndicatorData.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const country = req.query.code.toUpperCase();

  const freeEduPromise = IndicatorDataService.getFreeEducationYearsByCountry(
    country,
  );

  const compEduPromise = IndicatorDataService.getCompulsoryEducationYearsByCountry(
    country,
  );

  const literacyRatePromise = await IndicatorDataService.getLiteracyRateByCountry(
    country,
  );

  const netEnrollmentRatePromise = await IndicatorDataService.getNetEnrollmentRateByCountry(
    country,
  );

  const completionRatePromise = await IndicatorDataService.getCompletionRateByCountry(
    country,
  );

  const outOfSchoolRatePromise = await IndicatorDataService.getOutOfSchoolRateByCountry(
    country,
  );

  const [
    freeEdu,
    compEdu,
    literacyRate,
    netEnrollmentRate,
    completionRate,
    outOfSchoolRate,
  ] = await Promise.all([
    freeEduPromise,
    compEduPromise,
    literacyRatePromise,
    netEnrollmentRatePromise,
    completionRatePromise,
    outOfSchoolRatePromise,
  ]);

  res.status(200).json({
    free_edu: freeEdu,
    comp_edu: compEdu,
    literacy_rate: literacyRate,
    net_enrollment_rate: netEnrollmentRate,
    completion_rate: completionRate,
    out_of_school_rate: outOfSchoolRate,
  });
});

export default (req, res) => handler.apply(req, res);
