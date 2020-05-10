import nextConnect from 'next-connect';
import IndicatorDataService from '../../../../services/IndicatorData.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const indicator = await IndicatorDataService.findByIndicatorId(
    req.query.id,
    req.query.country,
  );
  res.status(200).json(indicator);
});

export default (req, res) => handler.apply(req, res);
