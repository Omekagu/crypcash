const scheduledTransfer = (req, res) => {
  try {
    res.send('sent');

    const { sender, reciever, amount, scheduledDate } = req.data;

    if (!sender || !reciever || !amount || !scheduledDate) {
      res.staus(400);
    }
  } catch (error) {}
};
const getaccountname = (req, res) => {
  try {
    res.send('sent');

    const { bank, accountNumber } = req.data;

    if (!bank || !accountNumber) {
      res.staus(400);
    }
  } catch (error) {}
};

module.exports = { scheduledTransfer, getaccountname };
