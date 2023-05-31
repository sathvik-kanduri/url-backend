
import Saveurl from "../models/UrlModel.js";
import { v4 as uuidv4 } from 'uuid';

export const Addurl = async(req,res)=>{
   
    try {
        let url = req.body.inputUrl;
        const existingData = await Saveurl.findOne({ url: url }).maxTimeMS(20000).exec();
        if (existingData) {
          res.json({ Shortened: `${existingData.shortUrl}` });
        }
        
        let shortUrl;
        let dataurl;
        
        let alias = req.body.alias;
        console.log(alias.length);
        
        if (alias.length > 0) {
          shortUrl = `https://urlshortner-p3hw.onrender.com/${req.body.alias}`;
          dataurl = {
            url: req.body.inputUrl,
            key: req.body.alias,
            shortUrl: shortUrl
          };
          res.json({ Shortened: shortUrl });
        } else {
          const uuid = uuidv4();
          let key = uuid.slice(0, 8);
          shortUrl = `https://urlshortner-p3hw.onrender.com/${key}`;
          dataurl = {
            url: req.body.inputUrl,
            key: key,
            shortUrl: shortUrl
          };
          res.json({ Shortened: shortUrl });
        }
        
      
        const UrlDoc = new Saveurl(dataurl);
        await UrlDoc.save();
      } catch (error) {
    
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
      }
    }      

// export const getUrl = async (req, res) => {
//   try {
//     const randomKey = req.params.key;
//     const UrlData = await Saveurl.find({ key: randomKey }).exec();
//     res.redirect(UrlData[0].url);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// };

export const getUrl = async (req, res) => {
  try {
    const randomKey = req.params.key;
    const UrlData = await Saveurl.findOne({ key: randomKey }).exec(); // Use findOne instead of find
    if (UrlData) {
      res.redirect(UrlData.url);
    } else {
      res.status(404).json({ error: 'URL not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
