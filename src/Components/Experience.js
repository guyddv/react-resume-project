import classes from "./Experience.module.css";

function ResumeExperience() {
  return (
    <div className={classes.experience}>
      <h3>Datacenter Technician</h3>
      <h4>Microsoft - Full Time</h4>
      <h4>May 2017 - Present</h4>
      <ul>
        <li>
          Break/Fix / RMA Tasks - Work various tickets for hardware, networking
          and cabling issues. Finish tickets per Service Level Agreement.
        </li>
        <li>
          Deployments/Decommissions - Deploy Azure clusters and complete cabling
          requirements. Push clusters through PNaaS and Bare-Metal testing.
          Escalate any issues to the appropriate property group. Complete
          decommissions and verify all DBDs are put in destruction bins and all
          recorded information is done per procedure.
        </li>
        <li>
          Train new technicians in troubleshooting steps for the various SKUs
          and pass along any tribal knowledge to assist in troubleshooting speed
          and efficiency.
        </li>
        <li>
          Take on Senior DCT role when SDCT is out and conduct daily sync
          meeting. Direct technicians in queue work and any special projects.
        </li>
      </ul>
      <h3>Datacenter Technician</h3>
      <h4>Atoss - Full Time</h4>
      <h4>Sept 2016 - May 2017</h4>
      <ul>
        <li>
          Learned the ticketing system and worked tickets in accordance to
          company SLA requirements.
        </li>
        <li>
          Worked on Break/Fix tickets, repairing servers with various hardware
          configurations and setups. Fixed issues related to hardware faults,
          including CPUs, DIMMs, and HDD/SSD replacements.
        </li>
        <li>
          Took guidance from the senior technician and lead technician and
          adjusted work load as necessary for special projects or higher
          severity tickets.
        </li>
        <li>
          Performed decommissions on old servers and hardware, following company
          procedures to ensure a timely and accurate disassembly of hardware and
          racks.
        </li>
        <li>
          Assisted team members with tickets, cabling, and any other questions
          concerning work being preformed at the time.
        </li>
      </ul>
      <h3>Technical Support Representative - Level 1</h3>
      <h4>teleNetwork - Full Time</h4>
      <h4>April 2013 - Sept 2016</h4>
      <ul>
        <li>
          Provided technical support through phone, chat and email for customers
          of Frontier Communications and Google Fiber.
        </li>
        <li>
          Walked customers through common ISP troubleshooting to get their
          internet or TV service back up and running.
        </li>
        <li>
          For Google Fiber, aided in troubleshooting common PC, Mac, and mobile
          device troubleshooting, including tablets, phones (both Android and
          iOS), and gaming systems.
        </li>
        <li>
          Troubleshooting included WiFi optimization, browser resets, setting
          DNS, some malware and nagware removal, driver updates, and various TV
          service issues.
        </li>
        <li>
          Created tickets for every call through the ISP ticketing system.
          Escalated tickets to appropriate groups when needed and performed
          outbound calls and emails to check up on recently completed tickets.
        </li>
        <li>
          Mentored new TSR agents in ISP call and ticketing procedures. Ensured
          new agents had a clear understanding of QA standards and common
          troubleshooting procedures. Submitted evaluations during the mentoring
          period to supervisors.
        </li>
        <li>
          Assisted with non-technical issues such as billing, construction
          complaints, and installation timelines. Answered questions regarding
          the services we offered and made recommendations based on feedback.
        </li>
      </ul>
    </div>
  );
}

export default ResumeExperience;
