const Country = require("./country");
const State = require("./state");
const City = require("./city");
const Place = require("./place");
const Zone = require("./zone");
const Region = require("./region");
const Area = require("./area");
const Employee = require("./employee");
const Employee_Role = require("./employeRole");
const Lead_Detail = require("./lead_detail");
const lead_Meeting = require("./lead_meeting.js");
const Campaign = require("./campaign.js");
const Employee_Campaign = require("./EmployeCampaign.js");
const Lead_Update = require("./lead_update.js");
const Site_Visit = require("./site_visit.js");
const Estimation = require("./estimation.js");
const AuditLeadDetail = require("./AuditLeadTable.js");
const AuditLeadRemark = require("./AuditLeadRemark.js");
const LeadConverted = require("./Lead_converted.js");
const AuditTraderTable = require("./AuditTraderTable.js");
const LeadLog = require("./leads_logs.js");
const FollowUPByAgent = require("./FollowUpByAgent.js");
const OnCallDiscussionByBdm = require("./OnCallDiscussionByBdm.js");
const BdmLeadAction = require("./BdmLeadAction.js");
const Attendance = require("./Attendence.js");
const Parivartan_State = require("./Parivartan_State.js");
const Parivartan_Region = require("./Parivartan_Region.js");
const Parivartan_Employee = require("./Parivartan_BDM.js");
const  BiDayOp = require("./BiDayOp.js");
const BiDayOpRemarks = require("./BiDayOpRemarks.js");
const BiBrooding = require("./BiBrooding.js");
const call_logs = require("./CallLog.js");
const incoming_calls  = require('./IncomingCall.js')
const PostCallData = require('./PostCallData.js');
const BiDayOpMaster = require('./BiDayOpMaster.js');
const BiDayOpLot = require('./BiDayOpLot.js');
const BiDayOpLotHistory = require('./BiDayOpLotHistory.js');
const CustomerLeadForm = require('./CustomerLeadForm.js');
const VistaarBroilerDistribution = require('./VistaarBroilerDistribution.js');
const chicks_inquiry = require('./ChicksInquiry.js');
const Parivartan_BDM = require('./Parivartan_BDM.js');
const source = require('./Source.js'); 
const sequelize = require('./index.js');

// source.sync({force: true});


// Uncomment and adjust the sync options as needed
//  source.sync({force:true});
// chicks_inquiry.sync({force: true});
// Parivartan_BDM.sync({alter: true});
// Country.sync({force:true});
// call_logs.sync({force:true});
// City.sync({alter:true});
// Place.sync({force:true});
// Zone.sync({force:true});
// Region.sync({force:true});
// Area.sync({force:true});
// Site_Visit.sync({force:true})
// BDM.sync({force:true})
// Employee.sync({alter: true});
// Employee_Role.sync({alter: true});
// Estimation.sync({alter: true});
// Attendance.sync();
// Parivartan_Employee.sync({force: true});
// lead_Meeting.sync({alter:true});
//  AuditLeadRemark.sync({force:true});
// Employee_Campaign.sync({force:true});
// Parivartan_Region.sync({force: true});
// Parivartan_Employee.sync({force: true});
// Lead_Update.sync({alter: true})


module.exports = {
  Lead_Update,
  Site_Visit,
  lead_Meeting,
  Employee,
  Employee_Role,
  Country,
  State,
  City,
  Place,
  Zone,
  Region,
  Area,
  Lead_Detail,
  Campaign,
  AuditLeadDetail,
};
