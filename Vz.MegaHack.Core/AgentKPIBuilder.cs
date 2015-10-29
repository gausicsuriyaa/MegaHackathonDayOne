using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vz.MegaHack.Entities;
using System.Web.Script.Serialization;

namespace Vz.MegaHack.Core
{
    public class AgentKPIBuilder
    {
        public static string AgentName;
        public static string chartData;
        
        public string GetData(string AgentName)
        {
            string chartData = string.Empty;
            List<AgentKPIScore> agentScore = TempData();
            List<string> agentKPI = new List<string>();
            foreach (KPIScoreInfo item in agentScore[0].ScoreDetails)
            {
                agentKPI.Add(item.Score);
            }
            //List<KPIScoreInfo> agentKPI = agentScore[0].ScoreDetails;

            JavaScriptSerializer jss = new JavaScriptSerializer();
            chartData = jss.Serialize(agentKPI);
            return chartData;
        }

        public string GetXAxis()
        {
            string chartData1 = string.Empty;
            List<AgentKPIScore> agentScore = TempData();
            List<string> axisVal = new List<string>();
            foreach (AgentKPIScore item in agentScore)
            {
                axisVal.Add(item.KPIName);
            }
            JavaScriptSerializer jss = new JavaScriptSerializer();
            chartData1 = jss.Serialize(axisVal);
            return chartData1;
        }

        public static List<AgentKPIScore> TempData()
        {
            List<AgentKPIScore> agentScore = new List<AgentKPIScore>();
            List<KPIScoreInfo> kpiScore = new List<KPIScoreInfo>();

            KPIScoreInfo info1 = new KPIScoreInfo();
            info1.Score = "25";
            info1.FromDate ="1/1/2015";
            info1.ToDate = "3/31/2015";
            info1.HasTrained = false;
            KPIScoreInfo info2 = new KPIScoreInfo();
            info2.Score = "24";
            info2.FromDate = "3/1/2015";
            info2.ToDate = "4/17/2015";
            info2.HasTrained = true;
            KPIScoreInfo info3 = new KPIScoreInfo();
            info3.Score = "30";
            info3.FromDate = "4/18/2015";
            info3.ToDate = "6/30/2015";
            info3.HasTrained = false;
            KPIScoreInfo info4 = new KPIScoreInfo();
            info4.Score = "45";
            info4.FromDate = "7/1/2015";
            info4.ToDate = "9/30/2015";
            info4.HasTrained = false;

            kpiScore.Add(info1);
            kpiScore.Add(info2);
            kpiScore.Add(info3);
            kpiScore.Add(info4);

            AgentKPIScore agentInfo1 = new AgentKPIScore();
            agentInfo1.KPIName = "FCR";
            agentInfo1.ScoreDetails = kpiScore;

            AgentKPIScore agentInfo2 = new AgentKPIScore();
            agentInfo2.KPIName = "Close Rate";
            agentInfo2.ScoreDetails = kpiScore;

            AgentKPIScore agentInfo3 = new AgentKPIScore();
            agentInfo3.KPIName = "AHT";
            agentInfo3.ScoreDetails = kpiScore;

            agentScore.Add(agentInfo1);
            agentScore.Add(agentInfo2);
            agentScore.Add(agentInfo3);

            return agentScore;
        }
    }
}
