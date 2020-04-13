import nextConnect from "next-connect";
import IndicatorService from "../../../services/Indicator.service";

const handler = nextConnect();

handler.get(async (req, res) => {
  const { pec_goal, topic, educative_level } = req.query;
  const indicators = await IndicatorService.find(
    pec_goal,
    topic,
    educative_level
  );
  res.status(200).json(indicators);
});

export default (req, res) => handler.apply(req, res);
