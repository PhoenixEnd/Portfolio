export const siteConfig = {
  name: "Ashmita Chakraborty",
  title: "Embedded System Software/Firmware Architect and Researcher",
  description: "Portfolio website of Ashmita Chakraborty",
  accentColor: "#1d4ed8",
  social: {
    email: "aschakra_ashim@outlook.com",
    linkedin: "https://www.linkedin.com/in/ashmita-chakraborty-469166129/",
    github: "https://github.com/PhoneixEnd",
  },
  aboutMe:
  "Dynamic and results-driven professional with over seven years of experience in Embedded Systems, Computer Science, and Deep Learning, specializing in embedded multimedia systems and audio signal processing. I have led and contributed to complex system-level developments involving data-driven analysis, performance optimization, and cross-functional collaboration, consistently delivering high-impact solutions for advanced technology projects in fast-paced, product-driven environments.",
  programmingSkills: ["C/C++", "Python", "CUDA", "FAUST", "MATLAB", "DS & Algorithms", "OS Programming", "FreeRTOS", "Contiki OS", "ThreadX", "Assembly Language Programming"],
  knowledge: 
    "EDKII sdk, ns-3, sound open firmware, rdk, Parallel computer architecture and GPU, Deep Learning, Perception Theory, Human-Brain Interface, Human-Computer Interaction, Audio/acoustics and machine learning, Android Audio Framework, Audio Codec, Alsa utils, Convolution and Correlation Algorithm, Noise Filtering and Equalizer, QNX (Basics)",
  tools: 
    "Git, Gerrit, Oscilloscope, Logic Analyzer, Audacity, REW, Xilinx Vivado, Keil, Code Collab, Perforce, Beyond Compare, Dediprog, QXDM, PCAT, QEMU, JTAG, JLINK, Segger, GDB, Cooja, NS-3, AMD proprietary tool (HDT)",
  projects: [
    {
      name: "HemodynamiQ Wearable Medical-Device",
      description:
        "Research and analysis on the hemodynamiq product and its working principle; Implemented Zephyr-based BLE telemetry and control for AD5940 BIA/ECG firmware - custom GATT service (128-bit UUIDs), read/write characteristics for control, and notify-driven data streams; Built real-time firmware threads (k_thread) for BLE command processing and battery monitoring, integrated ADC/I²C peripherals and AD5940 measurement entry points; Implemented DFT-based impedance measurement firmware for AD5940: configured SINC3 ADC + 8192-point DFT with Hann window, converted raw 18-bit DFT outputs to magnitude/phase, and applied per-frequency RTIA calibration for accurate impedance; Built low-power embedded sequencer and ISR/FIFO pipeline (WUPT wake/sleep, FIFO threshold handling) to acquire periodic impedance samples at 20 Hz and support logarithmic frequency sweeps (10 kHz–150 kHz); Designed reliable BLE-to-hardware control flow: CCC-based notifications, write handlers for wing selection/start-stop, and non-blocking periodic sampling loop",
      link: "https://www.hemodynamiq.com/",
      skills: ["C", "ARM Architecture", "Zephyr RTOS", "AD5940"],
    },
    {
      name: "Model-based System Engineering and OverSynchronisation of GPUs",
      description:
        "Investigating on the model-based system engineering, PID controller of multi-agent systems; Working on Over synchronisation of GPUs",
      link: " ",
      skills: ["Control system & theory", "LLM", "GPUs", "CUDA"],
    },
    {
      name: "Evaluating a Distributed Edge Network for In-Flight Data",
      description:
        "Worked on edge network and in-flight data processing and transfer of wireless distributed systems; Assessed the capability of cabin crew devices to function as a distributed edge network for data preprocessing; Evaluated the interaction between mobile edge nodes (cabin crew devices) and onboard data sources and services; Investigated and developed the testbed prototype for validating the IEEE802.11k, v, r standards, and DTN bundle protocol mechanisms; Integrated the android wifi wpa_supplicant code with fast-api server for the cabin crew devices; Implemented the algorithm for hybrid data transmission and power management using FastAPI server for bundle management on a central server; Implemented the algorithm for the feasibility region, adaptive redundancy and device selection management",
      link: " ",
      skills: ["Distributed Computing Systems", "Communication Networking", "ION-DTN", "IEEE 802.11k/v/r", "NS-3"],
    },
    {
      name: "Multimedia XR/VR/AR Project ",
      description:
        "Developed the system design of a single-function mobile application detailing out the problem context and FBS of one competing solution; Collaborated with UI/UX researchers group and proposed the structural semiotic analysis of the product and its different dynamics from other market segments; Designed, scoped and developed a use-case using AR/VR technology for the product feature – Haptic navigation inside a large-scale automotive vehicle to serve the purpose of using the integration of haptic feedback devices in wearables, portable devices, or cabinet equipment for wayfinding (based on intuitive and discreet haptic feedback) in an airplane or train cabin; Conceptualized a product from scratch – Oreo’s Cyberquest Safari- that uses AR/VR technology to serve the purpose of interactive wayfinding - using remote navigation; identify & interact with surrounding object - using object identification; interactive, immersive information presentation using AR",
      link: " ",
      skills: [ "ESP32Cam", "STM32F0407 Disc Board", "Unity", "AR SDK Kit", "OpenCV" ],
    },
    {
      name: "Honeywell ILC product Systevo Touch IP – Nurse call system",
      description:
        "Proposed SoW for the Honeywell ILC product Systevo Touch IP – Nurse call system; Designed and developed half duplex communication system from scratch for the Systevo Touch IP product; Collaborated with the German team for the new envisioned product of Nurse Call System for better DSP performance – Half Duplex using BT and Talk together Full duplex design for the ARM A53 CPU board; Designed and developed full duplex communication system signal flow DSP for the Systevo product – STIP/SCS & SRT. to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://automation.honeywell.com/us/en/products/sensing-solutions/intelligent-life-care/call-systems/patient-room-components",
      skills: ["Arm Cortex M7", "Arm Cortex A53 CPU", "Audio Weaver", "G711a codec", "ABUS protocol", "ULAW" ],
    },
    {
      name: "Audio Features - HFP & Subsystem Reset on Slate+ (Qualcomm) product",
      description:
        "Developed code for the Sub System reset feature of Audio Codec on the Slate-plus product; Pioneered the implementation of the Audio Reach Android framework (middleware in the application processor to configure and perform signal processing on the DSP) on a co-processor RTOS(Free-RTOS) used in a smart-watch; Implemented the algorithm of HFP call support feature on the smart watch on Audio Reach software stack; Established the design of Audio Use-Case graph for HFP loopback call; Achieved understanding of the functionality of Audio Reach PAL, AGM and below layers, established the functionality of Hands-Free Profiling use-case and defined the APIs for the same; Established the design of the Stream Rx and Tx and Device Rx-Tx with the use of the necessary IIR and FIR filters.",
      link: " ",
      skills: ["Audio Reach Architecture", "Android Audio Framework", "ARM architecture", "Shell Scripting", "I2S", "Multithreading", "Worker Thread Model", "Embedded Linux", "Linux Kernel", "ALSA programming", "C/C++", "Free-RTOS"],
    },
    {
      name: "Qualcomm Aware Platform",
      description:
        "As part of two-member team, pioneered the Qualcomm Aware Platform which is an IoT platform, spearheaded and contributed towards the Aware Client System design both HLD and LLD that runs on a worker thread model which collects the sensors data from modem (CATM, NB-IoT, GPRS/EDGE) and sends the data to cloud; Implemented and executed the Aware Client Code of the Aware Platform System (application layer in the application processor that sits over the Modem) to collect the sensors data from sensors manager, location data from GPS drops via the callback function to the Aware Cloud; Spearheaded the Aware GNSS design and established the State Diagram of the Location Technology which includes GNSS single-shot, XTRA, NTP sync server, GTP-1/2 blob data, Geofence call flow; Implemented Location as Service (GNSS, GTP, APS) code that registers the callback functions and calls the QAPIs from middleware of the software stack and sends the location data: latitude, longitude, altitude and elevation to the data manager thread which then sends the data collectively to the cloud; Spearheaded and contributed to the sensor manager code on the Aware system platform, supporting algorithms like Free fall detection, shock detection, flight mode detection, tilt angle estimation/inclinometer, motion change detection, theft detection, door open & close detection. The algo sends alert notification to the cloud when threshold breach occurs; Established the GNSS FOTA design to accomplish the differential upgradation of image to and from the cloud for the firmware QCX217. FOTA is vital to the Aware tracker device, which involves the process of OTA download and update of images without the device in hand; Established and Contributed towards the Aware Data Model; Collaborated the design and contributed towards establishing PSM Model for the Aware Client Embedded Application Model; • Contributed towards peer code review; Collaborated and contributed towards Task Planning and Project Estimation; Spearheaded in setting up discussion on risk management with stakeholders for the project deliverable; Orchestrated the technical presentation on the feature developed after each CS release",
      link: "https://www.qualcomm.com/internet-of-things/solutions/aware",
      skills: ["Thread-X", "Location Technologies: GNSS, Single-shot, GTP-1, GTP-2, XTRA sync and NTP sync", "FOTA", "DFOTA", "Protobuf", "XML basics", "AT commands"],
    },
    {
      name: "Server Systems and Platform - Features",
      description:
        "Implemented the code for core-complex microcode patching; Managed and orchestrated the APEX design discussion with the cross-geo locations team; Collaborated and contributed towards the design of the APEX architecture that connects the server boards using BMC controller, Enabling register read check through HDT (Hardware Debug Tool) and KYSY controller. HDT acts as important tool which provides GUI that allows access to internal & configuration space registers serving purposes like PCIe tasks, reading back the system status and active debugging; Spearheaded the design for Secure Debug Unlock feature both HLD and LLD, implemented the code for Secure Debug Unlock for the Server processor boards: Daytona that securely locks and unlocks the secure parts to read registers of security processor using Hardware Debug Tool; Achieved understanding of PSP processor and it’s application in Data Centre Industry; Contributed towards the development of BMC Controller into APEX framework for the purpose of providing access to BMC functions like test station power state detection and manipulation; BIOS & test station diagnostics; Collaborated and contributed towards the automated firmware test plan for the Secure Debug Unlock feature; Contributed towards the design of the Virtual Wombat server SW implementation. It is a replacement of physical Wombat Setup that is physically attached to Emulators, maintaining same level of functionality allowing users run HDT, KYSY; Pioneered the porting of ACPI code onto the ethanol, Daytona server processor boards; Spearheaded often the technical discussion of the sprint cycle; Collaborated and contributed towards the integration and monitoring of builds in cloudbees and Jenkins as well as power cycle issues of the chipset/SoC. ",
      link: " ",
      skills: ["C", "Python", "Ruby", "Jenkins", "APEX"],
    },
    {
      name: "Automotive Gordon Peak Infotainment System",
      description:
            "The project “Automotive Gordon Peak Infotainment System” highlights the Android framework being ported and built on Gordon Peak board. Established the build, upgrades of Android desserts and Android BSP bring up for Android 11; Contributed towards the build and creation of Kernel and Kernel CVE patches for the android desserts and integration of the kernel patches with the aosp code; Resolved many Android system level issues; one of the issues is bootloader image incremental issue, increasing at the rate of 544 bytes in Android 9 image; Debugged and resolved IFWI DNX issue of Android Q dessert for the customer, by modifying .mk files of the source code; Pioneered the porting the Android R code on the Gordon Peak board that includes changes in the OS abstraction layer; Contributed towards the optimization of Camera HAL module and Graphics Rendering; Achieved the understanding of Camera Android HAL framework; Orchestrated the retrospective discussions after each customer release builds",
      link: " ",
      skills: ["Shell scripting", "C", "Android Camera HAL Framework"],
    },
    {
      name: "Coreboot Bring-Up in ComE Type 7 compatible module based on Intel Xeon D-1559",
      description:
        "The project “Coreboot Bring-Up in ComE Type 7 compatible module based on Intel Xeon D-1559 processor” highlights the BIOS development using EDK2 source on the NPU module of Xeon D-1559; Spearheaded, pioneered and contributed towards building and flashing 8MB image for Broadwell Xeon D1559; Contributed towards building Kernel 3.0 on CentOS; Contributed towards building, generating FSP binary, UEFI payload binary, stitching the Coreboot image with other ME binaries and porting Coreboot code onto the evaluation board of Xeon server processor; Contributed towards optimization of Intel FSP GrangevillePkg source code; Acquired the understanding of the specification of hardware components and defining the bit fields required for bit manipulation for enabling and disabling features through extensive study of the documents; Collaborated and pioneered the design of the SRS document by defining the apis for the features developed on Xeon board, design of the coreboot control and data flow; Spearheaded and implemented edk2 drive code (base edk2 framework for all the peripherals of x86 processor) to monitor digital thermal temperature of the module, to add command in the efi shell that list down the status of all the BIOS configuration parameters; Implemented the code in edk2 driver to read SMBUS EEPROM data, read voltage, power and soc temperature; Contributed towards the optimization of the Coreboot source in devicetree.cb file to reduce the boot up time to less than 2s. variety of battle-tested starter templates & examples",
      link: " ",
      skills: ["UEFI EDK2 driver", "C/C++", "Hardware programming", "Shell scripting", "Embedded Linux", "CH341A Programmer"],
    },
    {
      name: "Electronic Voting Machine",
      description:
        "Implemented code for BIOS authentication for the system product “Electronic Voting Machine”; Collaborated functional validation of BIOS authentication code which is vital to verify and authenticate the partitions of elf using private and public key using SHA1 and SHA256 cryptographic functions; Implemented basic console menu UI based on the requirements of the Micron to collect data from the user. The project uses multithreading implementation in Python mainly; Developed the middleware code for interfacing Temperature sensor as well as Moisture sensor with Rpi 3 for the in-house project of Smart Agriculture System. This project proposes a system which collects humidity information from air and moisture from soil using camera and ML mechanism and based on the output data, the type of plant is identified",
      link: "",
      skills: ["TPM Tool", "Secure Boot", "HART key sign tool", "C++"],
    },
],
  experience: [
    {
      company: "HemodynamiQ",
      title: "Embedded System Software/Firmware Engineer",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Research and analysis on the hemodynamiq product and its working principle",
        "Implemented Zephyr-based BLE telemetry and control for AD5940 BIA/ECG firmware - custom GATT service (128-bit UUIDs), read/write characteristics for control, and notify-driven data streams",
        "Built real-time firmware threads (k_thread) for BLE command processing and battery monitoring, integrated ADC/I²C peripherals and AD5940 measurement entry points",
        "Implemented DFT-based impedance measurement firmware for AD5940: configured SINC3 ADC + 8192-point DFT with Hann window, converted raw 18-bit DFT outputs to magnitude/phase, and applied per-frequency RTIA calibration for accurate impedance",
        "Built low-power embedded sequencer and ISR/FIFO pipeline (WUPT wake/sleep, FIFO threshold handling) to acquire periodic impedance samples at 20 Hz and support logarithmic frequency sweeps (10 kHz–150 kHz)",
        "Designed reliable BLE-to-hardware control flow: CCC-based notifications, write handlers for wing selection/start-stop, and non-blocking periodic sampling loop",
               
      ],
    },
    {
      company: "Indian Institute of Science",
      title: "Visting Researcher",
      dateRange: "Jul 2025 - Present",
      bullets: [
         "Investigating on the model-based system engineering, PID controller of multi-agent systems",
         "Working on Over synchronisation of GPUs",

       ],
    },
    {
      company: "Indian Institute of Science",
      title: "Project Research Associate @ Zen Lab",
      dateRange: "Mar 2025 - Jun 2025",
      bullets: [
        "Worked on edge network and in-flight data processing and transfer of wireless distributed systems",
        "Assessed the capability of cabin crew devices to function as a distributed edge network for data preprocessing",
        "Evaluated the interaction between mobile edge nodes (cabin crew devices) and onboard data sources and services",
        "Investigated and developed the testbed prototype for validating the IEEE802.11k, v, r standards, and DTN bundle protocol mechanisms",
        "Integrated the android wifi wpa_supplicant code with fast-api server for the cabin crew devices",
        "Implemented the algorithm for hybrid data transmission and power management using FastAPI server for bundle management on a central server",
        "Implemented the algorithm for the feasibility region, adaptive redundancy and device selection management",
      ],
    },
    {
      company: "Indian Institute of Science",
      title: "Multimedia XR/VR/AR Intern @ CPDM LAB",
      dateRange: "Aug 2024 - Feb 2025",
      bullets: [
        "Developed the system design of a single-function mobile application detailing out the problem context and FBS of one competing solution",
        "Collaborated with UI/UX researchers group and proposed the structural semiotic analysis of the product and its different dynamics from other market segments",
        "Designed, scoped and developed a use-case using AR/VR technology for the product feature – Haptic navigation inside a large-scale automotive vehicle to serve the purpose of using the integration of haptic feedback devices in wearables, portable devices, or cabinet equipment for wayfinding (based on intuitive and discreet haptic feedback) in an airplane or train cabin",
        "Conceptualized a product from scratch – Oreo’s Cyberquest Safari- that uses AR/VR technology to serve the purpose of interactive wayfinding - using remote navigation; identify & interact with surrounding object - using object identification; interactive, immersive information presentation using AR",
      ],
    },
    {
      company: "Harman India",
      title: "Lead Product Development Engineer(Audio HAL/DSP)",
      dateRange: "Feb 2024- Feb 2025",
      bullets: [
         "Developed new idea on Nature-scape product of Harman, designing the surround sound using Dolby Atmos in inventor contest at HARMAN",
         "Proposed SoW for the Honeywell ILC product Systevo Touch IP – Nurse call system",
         "Designed and developed half duplex communication system from scratch for the Systevo Touch IP product", 
         "Collaborated with the German team for the new envisioned product of Nurse Call System for better DSP performance – Half Duplex using BT and Talk together Full duplex design for the ARM A53 CPU board",
         "Designed and developed full duplex communication system signal flow DSP for the Systevo product – STIP/SCS & SRT",

       ],
    },
    {  
      company: "Qualcomm",
      title: "Senior Engineer - Multimedia IoT",
      dateRange: "Apr 2022 - Nov 2023",
      bullets: [
        "Developed code for the Sub System reset feature of Audio Codec on the Slate-plus product",
        "Pioneered the implementation of the Audio Reach Android framework (middleware in the application processor to configure and perform signal processing on the DSP) on a co-processor RTOS(Free-RTOS) used in a smart-watch",
        "Implemented the algorithm of HFP call support feature on the smart watch on Audio Reach software stack",
        "Established the design of Audio Use-Case graph for HFP loopback call",
        "Achieved understanding of the functionality of Audio Reach PAL, AGM and below layers, established the functionality of Hands-Free Profiling use-case and defined the APIs for the same",
        "Established the design of the Stream Rx and Tx and Device Rx-Tx with the use of the necessary IIR and FIR filters",
        "As part of two-member team, pioneered the Qualcomm Aware Platform which is an IoT platform, spearheaded and contributed towards the Aware Client System design both HLD and LLD",  
        "Implemented and executed the Aware Client Code of the Aware Platform System (application layer in the application processor that sits over the Modem)", 
        "Spearheaded the Aware GNSS design and established the State Diagram of the Location Technology", 
        "Implemented Location as Service (GNSS, GTP, APS) code that registers the callback functions and calls the QAPIs from middleware of the software stack", 
        "Spearheaded and contributed to the sensor manager code on the Aware system platform, supporting algorithms like Free fall detection, shock detection, flight mode detection, tilt angle estimation/inclinometer, motion change detection, theft detection, door open & close detection",
        "Established the GNSS FOTA design to accomplish the differential upgradation of image to and from the cloud for the firmware QCX217", 
        "Established and Contributed towards the Aware Data Model",
        "Collaborated the design and contributed towards establishing PSM Model for the Aware Client Embedded Application Model",
        "Contributed towards peer code review",
        "Collaborated and contributed towards Task Planning and Project Estimation",
        "Spearheaded in setting up discussion on risk management with stakeholders for the project deliverable",
        "Orchestrated the technical presentation on the feature developed after each CS release",
      ],
    },
    {   
      company: "AMD",
      title: "SDE2",
      dateRange: "Mar 2021 - Feb 2022",
      bullets: [
        "Implemented the code for core-complex microcode patching",
        "Managed and orchestrated the APEX design discussion with the cross-geo locations team",
        "Collaborated and contributed towards the design of the APEX architecture that connects the server boards using BMC controller, enabling register read check through HDT (Hardware Debug Tool) and KYSY controller",
        "Spearheaded the design for Secure Debug Unlock feature both HLD and LLD, implemented the code for Secure Debug Unlock for the Server processor boards: Daytona", 
        "Contributed towards the automated firmware test plan for the Secure Debug Unlock feature",
        "Achieved understanding of PSP processor and it’s application in Data Centre Industry",
        "Contributed towards the development of BMC Controller into APEX framework for the purpose of providing access to BMC functions like test station power state detection and manipulation",
        "Contributed towards the design of the Virtual Wombat server SW implementation",
        "Pioneered the porting of ACPI code onto the ethanol, Daytona server processor boards",
        "Spearheaded often the technical discussion of the sprint cycle",
        "Collaborated and contributed towards the integration and monitoring of builds in cloudbees and Jenkins as well as power cycle issues of the chipset/SoC",
      ],
    },
    {   
      company: "L&T Technology Services (INTEL)",
      title: "Engineer",
      dateRange: "Mar 2020 - Feb 2021",
      bullets: [
        "Established the build, upgrades of Android desserts and Android BSP bring up for Android 11",
        "Contributed towards the build and creation of Kernel and Kernel CVE patches for the android desserts and integration of the kernel patches with the aosp code",
        "Resolved many Android system level issues; one of the issues is bootloader image incremental issue, increasing at the rate of 544 bytes in Android 9 image",
        "Debugged and resolved IFWI DNX issue of Android Q dessert for the customer, by modifying .mk files of the source code",
        "Pioneered the porting the Android R code on the Gordon Peak board that includes changes in the OS abstraction layer",
        "Contributed towards the optimization of Camera HAL module and Graphics Rendering",
        "Achieved the understanding of Camera Android HAL framework",
        "Orchestrated the retrospective discussions after each customer release builds",
      ],
    },           
    {
      company: "L&T Technology Services (AIRSPAN)",
      title: "Associate Engineer",
      dateRange: "Aug 2018 - Mar 2020",
      bullets: [
        "Spearheaded, pioneered and contributed towards building and flashing 8MB image for Broadwell Xeon D1559",
        "Contributed towards building Kernel 3.0 on CentOS",
        "Contributed towards building, generating FSP binary, UEFI payload binary, stitching the Coreboot image with other ME binaries and porting Coreboot code onto the evaluation board of Xeon server processor",
        "Contributed towards optimization of Intel FSP GrangevillePkg source code",
        "Acquired the understanding of the specification of hardware components and defining the bit fields required for bit manipulation for enabling and disabling features through extensive study of the documents",
        "Collaborated and pioneered the design of the SRS document by defining the apis for the features developed on Xeon board, design of the coreboot control and data flow",
        "Spearheaded and implemented edk2 driver code (base edk2 framework for all the peripherals of x86 processor) to monitor digital thermal temperature of the module, to add command in the efi shell that list down the status of all the BIOS configuration parameters",
        "Implemented the code in edk2 driver to read SMBUS EEPROM data, read voltage, power and soc temperature",
        "Contributed towards the optimization of the Coreboot source in devicetree.cb file to reduce the boot up time to less than 2s",
        "Implemented code for BIOS authentication",
        "Collaborated functional validation of BIOS authentication code which is vital to verify and authenticate the partitions of elf using private and public key using SHA1 and SHA256 cryptographic functions",
        "Implemented basic console menu UI based on the requirements of the Micron to collect data from the user", 
        "Developed the middleware code for interfacing Temperature sensor as well as Moisture sensor with Rpi 3 for the in-house project of Smart Agriculture System",
            ],
    },
    {
      company: "SRM IST - KTR Chennai",
      title: "Major Project in Final Year",
      dateRange: "Jan 2018 - May 2018",
      bullets: [           
        "Contributed towards the design of a system model: Automated Human Face Recognition with RFID and Stereo Vision Camera and algorithm which is capable of taking attendance on a two-step verification process that includes RFID and image processing",
        "ATmega16 microcontroller is used for interfacing and controlling RFID device that recognizes a person with unique id followed by image processing that makes use of MATLAB for the process of face recognition and Stereo vision camera for capturing the image and extracting the image properties like HOG features, contours, etc., of the images and correctly matching the given image with the correct image from the database",
        "Developed the code for the interfacing and controlling RFID device with ATmega16",
            ],
    },
    {
        company: "ONGC",
        title: "Internship",
        dateRange: "Jun 2017 - Jul 2017",
        bullets: [
                "Achieved knowledge on the basics of oil drilling process",
                "Acquired hands on experience with SCADA drilling rigs",
                "Achieved knowledge on the Wireless Communication, Cellular Communication and VSAT architecture for the networking among various drilling network nodes",
                "Achieved knowledge on hexagonal cellular communication and Network Addressing ipv4 and ipv6 network addresses",
            ],
    },
  ],
  education: [
    {
      school: "Indian Institute of Science",
      degree: "Centre for Continuing Education",
      dateRange: "2024",
      achievements: [
        "Machine Learning for wireless communication in 5G & 6G",
      ],
    },

    {
      school: "SRM IST",
      degree: "Bachelor of Technology in Electronics and Communication",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated with 9.756 CGPA",
        "Scholarship Holder of ECE dept",
        "Achieved 2nd rank in Project “Automated Human Face Recognition using RFID and Stereo Vision Camera”",
        "Semi – Finalist in SHAASTRA conducted by IIT Madras in 2016",
      ],
    },
    {
      school: "Hindi Higher Secondary School",
      degree: "Class XII in Science Stream",
      dateRange: "2014",
      achievements: [
        "Achieved 83.5%",
      ],
    },
    {
      school: "Bharatiya Vidya Bhavan",
      degree: "Class X",
      dateRange: "2012",
      achievements: [
        "Achieved 9.5 CGPA",
      ],
    },
  ],
 publications: [
        {
            title: "Conversation AI Dialog for Medicare powered by Fine-tuning and Retrieval Augmented Generation",
    //        link: "https://arxiv.org/abs/2502.02249",
        },
        {
            title: "AI-Engine-Based Acceleration for High-Performance Programmable System-on-Chip Designs",
    //        link: "https://www.eudoxuspress.com/index.php/pub/article/view/3351/2402",
        },
    ],
 patents: [
        {
            title: "Enhancing Relation Extraction and Named Entity Recognition Using Fine-Tuned BERT Model with Transfer Learning",
            number: "202421090014",
            date: "2024",
        },
        {
            title: "Advanced Sentiment Analysis Framework Utilizing Semantic Role Labeling with Deep Learning Techniques",
            number: "202421090262",
            date: "2024",
        },
        {
            title: "Revolutionizing Medicare Assistance: Conversational AI Dialog System Powered by Fine-Tuning and Retrieval-Augmented Generation",
            number: "202421089467",
            date: "2024",
        },
    ],
};
