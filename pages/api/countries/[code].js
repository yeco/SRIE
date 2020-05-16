import nextConnect from 'next-connect';
import CountryService from '../../../services/Country.service';

const handler = nextConnect();

handler.get(async (req, res) => {
  const country = await CountryService.findByCode(req.query.code);

  if (country) {
    res.status(200).json(country);
  } else {
    res.status(404).json({ error: true, message: 'Country not found' });
  }
});

export default (req, res) => handler.apply(req, res);
