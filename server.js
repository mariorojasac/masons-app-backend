const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const contactsController = require("./controllers/contacts");

app.listen(PORT, () => console.log(`Express is listening on port:${PORT}`));
