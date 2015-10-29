using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Vz.MegaHack.Core;
using Vz.MegaHack.Entities;
using Vz.MegaHack.Test;
using System.Web.Script.Serialization;

namespace Vz.MegaHack.Web
{
    public partial class AgentKPIScoreCard : System.Web.UI.Page
    {
        public string chartData{get;set;}
        public string chartData1{get;set;}
        protected void Page_Load(object sender, EventArgs e)
        {
            AgentKPIBuilder kpiBuilder = new AgentKPIBuilder();
            chartData = kpiBuilder.GetData("abc");
            chartData1 = kpiBuilder.GetXAxis();
        }
    }
}