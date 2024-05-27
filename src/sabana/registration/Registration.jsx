import './registration.css';
import login from './lip-logo.png';
import React, { useRef, useState } from "react";
import useFormPost from '../useFormPost';
import Loader from '../../main/assets/Loader';
const style = {display:'flex',alignItem:'center',justifyContent:'center'}
const Registration = () => {

  const [formInfo, setFormInfo] = useState('');
  const formRef = useRef();
const [submit,loading,state] = useFormPost()
const FormData = (e) => {
  e.preventDefault();
  const postData = {
    organizationType  : formRef.current.organizationType.value,
    registrationProof : formRef.current.registrationProof.value,
    material          : formRef.current.material.value,
    secondropdown     : formRef.current.secondropdown.value,
    contactr          : formRef.current.contactr.value,
    mobiler           : formRef.current.mobiler.value,
    emailr            : formRef.current.emailr.value,
    stater            : formRef.current.stater.value,
    cityr             : formRef.current.cityr.value,
  }
  submit(postData,formRef)

console.log(postData);

}
console.log(formInfo);



  
  function handleFirstDropdownChange() {
    var firstDropdown = document.getElementById("firstDropdown");
    var secondDropdown = document.getElementById("secondDropdown");
    var selectedValue = firstDropdown.value;

    secondDropdown.innerHTML = "";

   
      if (selectedValue === "MARKETING SERVICES") {
        secondDropdown.style.display = "block";
        secondDropdown.innerHTML += "<option value='ADVERTISEMENT AGENCY'>ADVERTISEMENT AGENCY</option>";
        secondDropdown.innerHTML += "<option value='MARKETING CHANNEL PARTNER'>MARKETING CHANNEL PARTNER</option>";
        secondDropdown.innerHTML += "<option value='MARKETING EXHIBITIONS'>MARKETING EXHIBITIONS</option>";
        secondDropdown.innerHTML += "<option value='MARKETING OUTDOOR AGENCY'>MARKETING OUTDOOR AGENCY</option>";
        secondDropdown.innerHTML += "<option value='MARKETING RESEARCH AGENCY'>MARKETING RESEARCH AGENCY</option>";
        secondDropdown.innerHTML += "<option value='MARKETING SPONSORSHIP'>MARKETING SPONSORSHIP</option>";
        secondDropdown.innerHTML += "<option value='PRODUCTION AGENCY'>PRODUCTION AGENCY</option>";
    } else if (selectedValue === "tvc") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ADVERTISEMENT AGENCY'>ADVERTISEMENT AGENCY</option>";
      secondDropdown.innerHTML += "<option value='PRODUCTION AGENCY'>PRODUCTION AGENCY</option>";
    } else if (selectedValue === "markagency") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ADVERTISEMENT AGENCY'>ADVERTISEMENT AGENCY</option>";
    } else if (selectedValue === "AGGREGATES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='AGGREGATES'>AGGREGATES</option>";


    } else if (selectedValue === "ALUMINIUM") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ALUMINIUM SUBCONTRACTOR'>ALUMINIUM SUBCONTRACTOR</option>";

    } else if (selectedValue === "CONSULTANT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ANIMATION CONSULTANT'>ANIMATION CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='ARCHITECTURAL CONSULTANT '>ARCHITECTURAL CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='COST CONSULTANT '>COST CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL CONSULTANT '>ELECTRICAL CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='FIREFIGHTING CONSULTANT '>FIREFIGHTING CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value=' HVAC CONSULTANT'>HVAC CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value=' LANDSCAPING CONSULTANT'>LANDSCAPING CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='LIFT CONSULTANT '>LIFT CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value=' PLUMBING CONSULTANT'>PLUMBING CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='QUALITY CONSULTANT '>QUALITY CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='STRUCTURAL CONSULTANT '>STRUCTURAL CONSULTANT</option>";
    } else if (selectedValue === "ANTI") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ANTI-TERMITE SUBCONTRACTOR'>ANTI-TERMITE SUBCONTRACTOR</option>";
    } else if (selectedValue === "ANTI") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ARCHITECTURAL CONSULTANT'>ARCHITECTURAL CONSULTANT</option>";
    } else if (selectedValue === "markagency") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ADVERTISEMENT AGENCY'>ADVERTISEMENT AGENCY</option>";
    } else if (selectedValue === "SURVEY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ARCHITECTURAL CONSULTANT'>ARCHITECTURAL CONSULTANT</option>";
    } else if (selectedValue === "HIRE") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='BACKHOLE LOADERS HIRING'>BACKHOLE LOADERS HIRING</option>";
      secondDropdown.innerHTML += "<option value='CRANE - HIRING'>CRANE - HIRING</option>";
      secondDropdown.innerHTML += "<option value='DIESEL GENERATOR - HIRING'>DIESEL GENERATOR - HIRING</option>";
      secondDropdown.innerHTML += "<option value='DOZZERS - HIRING'>DOZZERS - HIRING</option>";
      secondDropdown.innerHTML += "<option value='EXCAVATORS - HIRING'>EXCAVATORS - HIRING</option>";
      secondDropdown.innerHTML += "<option value='MIXER MACHINE - HIRING'>MIXER MACHINE - HIRING</option>";
      secondDropdown.innerHTML += "<option value='SOIL COMPACTOR - HIRING'>SOIL COMPACTOR - HIRING</option>";
      secondDropdown.innerHTML += "<option value='TIPPER - HIRING'>TIPPER - HIRING</option>";
      secondDropdown.innerHTML += "<option value='TRANSIT MIXER - HIRING'>TRANSIT MIXER - HIRING</option>";
      secondDropdown.innerHTML += "<option value='TRACTORS - HIRING'>TRACTORS - HIRING</option>";
    } else if (selectedValue === "CARPENTRY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='BARBENDER LABOUR SUBCONTRACTOR'>BARBENDER LABOUR SUBCONTRACTOR</option>";
      secondDropdown.innerHTML += "<option value='CARPENTER LABOUR SUBCONTRACTOR'>CARPENTER LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "bore") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='BORE WELL CONTRACTORS'>BORE WELL CONTRACTORS</option>";
      secondDropdown.innerHTML += "<option value='BORE WELL'>BORE WELL</option>";
    } else if (selectedValue === "FLOORING") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CARPET & VINYL FLOORING SUBCON'>CARPET & VINYL FLOORING SUBCON</option>";
      secondDropdown.innerHTML += "<option value='GRANO FLOORING SUBCONTRACTORS'>GRANO FLOORING SUBCONTRACTORS</option>";
      secondDropdown.innerHTML += "<option value='WODDEN FLOORING SUBCONTRACTOR'>WODDEN FLOORING SUBCONTRACTOR</option>";
    } else if (selectedValue === "CEMENT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CEMENT'>CEMENT</option>";
    } else if (selectedValue === "CHIPPING") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CHIPPING LABOUR SUBCONTRACTOR'>CHIPPING LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "markagency") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ADVERTISEMENT AGENCY'>ADVERTISEMENT AGENCY</option>";
      // secondDropdown.innerHTML += "<option value='markagencyOption'>ADVERTISEMENT AGENCY</option>";
      // secondDropdown.innerHTML += "<option value='markagencyOption'>ADVERTISEMENT AGENCY</option>";
    } else if (selectedValue === "CIVIL") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CIVIL SUBCONTRACTORS'>CIVIL SUBCONTRACTORS</option>";
      secondDropdown.innerHTML += "<option value='EXCAVATION SUBCONTRACTORS'>EXCAVATION SUBCONTRACTORS</option>";
      secondDropdown.innerHTML += "<option value='EXPANSION JOINT SUBCONTRACTORS'>EXPANSION JOINT SUBCONTRACTORS</option>";
    } else if (selectedValue === "ADMIN") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='COMMUNICATION'>COMMUNICATION</option>";
      secondDropdown.innerHTML += "<option value='CONVEYANCE'>CONVEYANCE</option>";
      secondDropdown.innerHTML += "<option value='POWER SUPPLIERS'>POWER SUPPLIERS</option>";
      secondDropdown.innerHTML += "<option value='RENTAL'>RENTAL</option>";
      secondDropdown.innerHTML += "<option value='STAFF WELFARE'>STAFF WELFARE</option>";
    } else if (selectedValue === "INTERNET") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='COMMUNICATION'>COMMUNICATION </option>";
    } else if (selectedValue === "ELECTRONIC") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='COMPUTER DEALER'>COMPUTER DEALER</option>";
    } else if (selectedValue === "CONTAINERS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CONTAINER SUPPLIERS'>CONTAINER SUPPLIERS</option>";
    } else if (selectedValue === "CONVEYANCE") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CONVEYANCE'>CONVEYANCE</option>";
    } else if (selectedValue === "CP") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='CP FITTINGS'>CP FITTINGS</option>";
      secondDropdown.innerHTML += "<option value='PLUMBING/PIPES&FITTINGS'>PLUMBING/PIPES&FITTINGS</option>";
      secondDropdown.innerHTML += "<option value='PVC TANKS & TOILETS'>PVC TANKS & TOILETS</option>";
      secondDropdown.innerHTML += "<option value='SANITARY FITTINGS'>SANITARY FITTINGS</option>";
    } else if (selectedValue === "ONSKILLED") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='UNSKILLED - LABOUR SUBCONTRACT'>UNSKILLED - LABOUR SUBCONTRACT</option>";
    } else if (selectedValue === "LIASIONING") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='DEVELOPMENT AUTHORITIES'>DEVELOPMENT AUTHORITIES </option>";
      secondDropdown.innerHTML += "<option value='GOVT. AGENCIES'>GOVT. AGENCIES </option>";
      secondDropdown.innerHTML += "<option value='LIASONING CONSULTANT'> LIASONING CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='LOCAL BODIES'> LOCAL BODIES</option>";
    } else if (selectedValue === "MACHINERY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='DEWATERING PUMPS'>DEWATERING PUMPS</option>";
      secondDropdown.innerHTML += "<option value='DIESEL GENERATOR'>DIESEL GENERATOR</option>";
      secondDropdown.innerHTML += "<option value='EQUIPMENT SUPPLIERS'>EQUIPMENT SUPPLIERS</option>";
    } else if (selectedValue === "DOOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='DOOR FRAME'>DOOR FRAME</option>";
      secondDropdown.innerHTML += "<option value='DOOR SHUTTERS'>DOOR SHUTTERS</option>";
      secondDropdown.innerHTML += "<option value='DOORS & WINDOWS SUBCONTRACTOR'>DOORS & WINDOWS SUBCONTRACTOR</option>";
    } else if (selectedValue === "LABOUR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL-LABOUR SUBCONTRACT'>ELECTRICAL-LABOUR SUBCONTRACT</option>";
    } else if (selectedValue === "MEP") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL CONSULTANT'>ELECTRICAL CONSULTANT</option>";
    } else if (selectedValue === "BOXES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL PANEL BOARDS & DB B'>ELECTRICAL PANEL BOARDS & DB B</option>";
    } else if (selectedValue === "ELECTRICALPANELS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL PANEL BOARDS & DB B'>ELECTRICAL PANEL BOARDS & DB B</option>";
    } else if (selectedValue === "ELECTRICAL WORKS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL SUBCONTRACTORS'>ELECTRICAL SUBCONTRACTORS</option>";
    } else if (selectedValue === "ELECTRICAL SWITCHES /FITTINGS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL SWITCHES /FITTINGSOption'>ELECTRICAL SWITCHES&FITTINGS</option>";
    } else if (selectedValue === "ELECTRICAL WIRES/CABLES&CONDUI") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL WIRES/CABLES&CONDUI'>ELECTRICAL WIRES/CABLES&CONDUI</option>";
    } else if (selectedValue === "ELECTRICAL CABLES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='ELECTRICAL WIRES/CABLES&CONDUI'>ELECTRICAL WIRES/CABLES&CONDUI</option>";
    } else if (selectedValue === "HR SERVICES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='EMPLOYEE VENDOR'> EMPLOYEE VENDOR</option>";
      secondDropdown.innerHTML += "<option value='GOVT INSURANCE AGENCIES'>GOVT INSURANCE AGENCIES</option>";
      secondDropdown.innerHTML += "<option value='GOVT. AGENCIES'>GOVT. AGENCIES</option>";
      secondDropdown.innerHTML += "<option value='JOB POSTING WEBSITES'>JOB POSTING WEBSITES</option>";
      secondDropdown.innerHTML += "<option value='PRIVATE INSURANCE AGENCIES'>PRIVATE INSURANCE AGENCIES</option>";
    } else if (selectedValue === "FABRICATION SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FABRICATION SUBCONTRACTORS'>FABRICATION SUBCONTRACTORS</option>";
    } else if (selectedValue === "INTER WORKS ") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FALSE CEILING/PARTITION CONTRA'>FALSE CEILING/PARTITION CONTRA</option>";
      secondDropdown.innerHTML += "<option value='MOCKUP INTERIOR WORKS SUBCONTR'>MOCKUP INTERIOR WORKS SUBCONTR</option>";
    } else if (selectedValue === "FINANCIAL SERVICES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FINANCE CONSULTANT'>FINANCE CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='LOAN VENDOR'>LOAN VENDOR</option>";
    } else if (selectedValue === "FINANCIAL STATUTORY AUDIT SERVICES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FINANCE CONSULTANT'>FINANCE CONSULTANT</option>";
    } else if (selectedValue === "FINANCIAL TAX") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FINANCE CONSULTANT'>FINANCE CONSULTANT</option>";
    } else if (selectedValue === "FIRE FIGHTING WORKS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FIRE FIGHTING SUBCONTRACTORS'>FIRE FIGHTING SUBCONTRACTORS</option>";
    } else if (selectedValue === "FIREFIGHTING CONSULTANT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FIREFIGHTING CONSULTANT'>FIREFIGHTING CONSULTANT</option>";
    } else if (selectedValue === "STEEL") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='STEEL'>STEEL</option>";
    } else if (selectedValue === "FLY ASH") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FLY ASH'>FLY ASH</option>";
    } else if (selectedValue === "FORMWORK") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FORMWORK MANUFACTURERS'>FORMWORK MANUFACTURERS</option>";
    } else if (selectedValue === "FUELS & LUBRICANTS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FUELS & LUBRICANTS'>FUELS & LUBRICANTS</option>";
    } else if (selectedValue === "FURNITURE") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='FURNITURE MANUFACTURER'>FURNITURE MANUFACTURER</option>";
      secondDropdown.innerHTML += "<option value='FURNITURE TRADER'>FURNITURE TRADER</option>";
    } else if (selectedValue === "GRANITE & MARBILE SUBCONTRACTO") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='GRANITE & MARBILE SUBCONTRACTO'>GRANITE & MARBILE SUBCONTRACTO</option>";
    } else if (selectedValue === "GRANITE / MARBLE / KOTA SUPPLI") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='GRANITE / MARBLE / KOTA SUPPLI'>GRANITE / MARBLE / KOTA SUPPLI</option>";
    } else if (selectedValue === "GRANITE LABOUR SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='GRANITE LABOUR SUBCONTRACTOR'>GRANITE LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "HARDWARE ITEMS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='HARDWARE ITEMS'>HARDWARE ITEMS</option>";
    } else if (selectedValue === "HVAC CONSULTANT SERVICES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='HVAC CONSULTANT SERVICES'>HVAC CONSULTANT SERVICES</option>";
    } else if (selectedValue === "HVAC SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='HVAC SUBCONTRACTORS'>HVAC SUBCONTRACTORS</option>";
    } else if (selectedValue === "KHALASI LABOUR SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='KHALASI LABOUR SUBCONTRACTOR'>KHALASI LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "LAND") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LAND CONSULTANT'>LAND CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='LAND OWNER'>LAND OWNER</option>";
    } else if (selectedValue === "LAND SCAPE SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LAND SCAPE SUBCONTRACTOR'>LAND SCAPE SUBCONTRACTORS</option>";
    } else if (selectedValue === "LANDSCAPING CONSULTANT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LANDSCAPING CONSULTANT'>LANDSCAPING CONSULTANT</option>";
    } else if (selectedValue === "LEGAL SERVICES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LEGAL CONSULTANT'>LEGAL CONSULTANT</option>";
      secondDropdown.innerHTML += "<option value='REGISTRATION CHARGES'>REGISTRATION CHARGES</option>";
    } else if (selectedValue === "LIFT SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LIFT SUBCONTRACTORS'>LIFT SUBCONTRACTORS</option>";
    } else if (selectedValue === "LOUVER WORKS SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='LOUVER WORKS SUBCONTRACTOR'>LOUVER WORKS SUBCONTRACTOR</option>";
    } else if (selectedValue === "MANHOLE COVERS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MANHOLE COVERS'>MANHOLE COVERS</option>";
    } else if (selectedValue === "MANSONRY LABOUR SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MANSONRY LABOUR SUBCONTRACTOR'>MANSONRY LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "MARKETING EXHIBITIONS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MARKETING EXHIBITIONS'>MARKETING EXHIBITIONS</option>";
    } else if (selectedValue === "MARKETING OUTDOOR AGENCY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MARKETING OUTDOOR AGENCY'>MARKETING OUTDOOR AGENCY</option>";
    } else if (selectedValue === "MARKETING OUTDOOR AGENCY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MARKETING OUTDOOR AGENCY'>MARKETING OUTDOOR AGENCY</option>";
    } else if (selectedValue === "MARKETING SPONSORSHIP") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MARKETING SPONSORSHIP'>MARKETING SPONSORSHIP</option>";
    } else if (selectedValue === "MODEL MAKING VENDOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MODEL MAKING VENDOR'>MODEL MAKING VENDOR</option>";
    } else if (selectedValue === "MODULAR KITCHEN SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MODULAR KITCHEN SUBCONTRACTOR'>MODULAR KITCHEN SUBCONTRACTOR</option>";
    } else if (selectedValue === "MODEL MAKING VENDOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MODEL MAKING VENDOR'>MODEL MAKING VENDOR</option>";
    } else if (selectedValue === "MODULAR KITCHEN SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='MODULAR KITCHEN SUBCONTRACTOR'>MODULAR KITCHEN SUBCONTRACTOR</option>";
    } else if (selectedValue === "P&M SPARES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='P&M SPARES'>P&M SPARES</option>";
    } else if (selectedValue === "PAINTING - LABOUR SUBCONTRACTO") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PAINTING - LABOUR SUBCONTRACTO'>PAINTING - LABOUR SUBCONTRACTO</option>";
    } else if (selectedValue === "PAINTING SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PAINTING SUBCONTRACTORS'>PAINTING SUBCONTRACTORS</option>";
    } else if (selectedValue === "PAINTS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PAINTS'>PAINTS</option>";
    } else if (selectedValue === "PILING SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PILING SUBCONTRACTORS'>PILING SUBCONTRACTORS</option>";
    } else if (selectedValue === "PLUMBING - LABOUR SUBCONTRACTO") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PLUMBING - LABOUR SUBCONTRACTO'>PLUMBING - LABOUR SUBCONTRACTO</option>";
    } else if (selectedValue === "PLUMBING/PIPES&FITTINGS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PLUMBING/PIPES&FITTINGS'>PLUMBING/PIPES&FITTINGS</option>";
    } else if (selectedValue === "WOOD ITEMS / PLYWOOD") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='TIMBER WOOD SUPPLIERS'>TIMBER WOOD SUPPLIERS</option>";
      secondDropdown.innerHTML += "<option value='PLY WOOD SUPPLIERS'>PLY WOOD SUPPLIERS</option>";
    } else if (selectedValue === "POLISHING LABOUR SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='POLISHING LABOUR SUBCONTRACTOR'>POLISHING LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "PRINTING & STATIONERY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PRINTING & STATIONERY'>PRINTING & STATIONERY</option>";
    } else if (selectedValue === "PRODUCTION AGENCY") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='PRODUCTION AGENCY'>PRODUCTION AGENCY</option>";
    } else if (selectedValue === "QUALITY CONSULTANT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='QUALITY CONSULTANT'>QUALITY CONSULTANT</option>";
    } else if (selectedValue === "SOLID/PAVER/FLYASH BRICKS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='RED BRICKS'>RED BRICKS</option>";
      secondDropdown.innerHTML += "<option value='SOLID/PAVER/FLYASH BRICKS'>SOLID/PAVER/FLYASH BRICKS</option>";
    } else if (selectedValue === "RENTAL") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='RENTAL'>RENTAL</option>";
    } else if (selectedValue === "RMC") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='RMC'>RMC</option>";
    } else if (selectedValue === "SAFETY ITEM SUPPLIERS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SAFETY ITEM SUPPLIERS'>SAFETY ITEM SUPPLIERS</option>";
    } else if (selectedValue === "SAND") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SAND'>SAND</option>";
    } else if (selectedValue === "SOIL") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SOIL'>SOIL</option>";
    } else if (selectedValue === "SPORTS FACILITIES SUBCONTRACTO") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SPORTS FACILITIES SUBCONTRACTO'>SPORTS FACILITIES SUBCONTRACTO</option>";
    } else if (selectedValue === "SS RILING SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SS RILING SUBCONTRACTOR'>SS RILING SUBCONTRACTOR</option>";
    } else if (selectedValue === "STAFF WELFARE") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='STAFF WELFARE'>STAFF WELFARE</option>";
    } else if (selectedValue === "SURVEY SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SURVEY SUBCONTRACTOR'>SURVEY SUBCONTRACTORS</option>";
    } else if (selectedValue === "STRUCTURAL GLAZING SUBCONTRACT") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='STRUCTURAL GLAZING SUBCONTRACT'>STRUCTURAL GLAZING SUBCONTRACT</option>";
    } else if (selectedValue === "SWIMMING POOL SUBCONTRACTORS") {
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='SWIMMING POOL SUBCONTRACTORS'>SWIMMING POOL SUBCONTRACTORS</option>";
    } else if (selectedValue === "TILES") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='TILES'>TILES</option>";
    } else if (selectedValue === "TILING - LABOUR SUBCONTRACTOR") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='TILING - LABOUR SUBCONTRACTOR'>TILING - LABOUR SUBCONTRACTOR</option>";
    } else if (selectedValue === "UPVC SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='UPVC SUBCONTRACTORSC'>UPVC SUBCONTRACTORS</option>";

    } else if (selectedValue === "WATER") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='WATER'>WATER</option>";
    } else if (selectedValue === "WATER PROOFING CHEMICALS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='WATER PROOFING CHEMICALS'>WATER PROOFING CHEMICALS</option>";

    } else if (selectedValue === "JOINERY UPVC SUBCONTRACTORS") {
      secondDropdown.style.display = "block";
      secondDropdown.innerHTML += "<option value='Option'>Select</option>";
      secondDropdown.innerHTML += "<option value='JOINERY UPVC SUBCONTRACTORS'>JOINERY UPVC SUBCONTRACTORS</option>";
    // } else if (selectedValue === "TILING - LABOUR SUBCONTRACTOR") {
    //   secondDropdown.style.display = "block";
    //   secondDropdown.innerHTML += "<option value='TILING - LABOUR SUBCONTRACTORption'>TILING - LABOUR SUBCONTRACTOR</option>";
    // } else if (selectedValue === "WATER PROOFING  ") {
    //   secondDropdown.style.display = "block";
    //   secondDropdown.innerHTML += "<option value='WATER PROOFINGOption'>WATER PROOFING SUBCONTRACTOR</option>";
    } else {
      secondDropdown.style.display = "none";
    }
  }

  return(
    <>
      <div class="bg-img">
   <div className="containers">
      <form class="form-vendor" action="" ref={formRef}  onSubmit={FormData} >
         <img src={login} class="login-bgs" alt="login-img" />
         <h2 className="vendor-h2"> Investor Registration </h2>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Type of the Organization*</p>
            </div>
            <div className="select">
               <select id="mySelect" name="organizationType" type="select">
                  <option value="Select">Select</option>
                  <option value="Sole Proprietor">Sole Proprietor</option>
                  <option value="Partnership Firm">Partnership Firm</option>
                  <option value="Company">Company</option>
               </select>
            </div>
         </div>
         <div class="input-container1">
            <div class="p-div">
               <p class="pName">Registration Proof*</p>
            </div>
            <div class="select">
               <label class="radio-inline">
               <input type="radio" name="registrationProof" value="GSTNumber" required />GST Number
               </label>
               <label class="radio-inline">
               <input type="radio" name="registrationProof" value="PANNumber" required/>PAN Number
               </label>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Material / Service Category*</p>
            </div>
            
            <div className="select">
               <select id="firstDropdown" onChange={handleFirstDropdownChange} class="selectfirst" name="material" type="select" >
                  <option value="">Select </option>
                  <option value="market">MARKETING SERVICES</option>
                  <option value="tvc">MARKETING TVC ADS</option>
                  <option value="markagency">MARKETING RADIO</option>
                  <option value="markagency">MARKETING ONLINE</option>
                  <option value="markagency">MARKETING BULK SMS</option>
                  <option value="AGGREGATES">AGGREGATES</option>
                  <option value="ALUMINIUM">JOINERY ALUMINIUM / SERVICES</option>
                  <option value="CONSULTANT">CONSULTANT SERVICES</option>
                  <option value="ANTI">ANTI-TERMITE TREATMENT</option>
                  <option value="SURVEY">SURVEY CONSULTANT  SERVICES</option>
                  <option value="SURVEY">ENVIRONMENTAL CONSULTANT SERVICES</option>
                  <option value="SURVEY">WATER DIVINER CONSULTANT SERVICES</option>
                  <option value="SURVEY">SOIL TESTING CONSULTANT SERVICES</option>
                  <option value="SURVEY">COST CONSULTANT SERVICES</option>
                  <option value="SURVEY">HOME THEATRE WORKS</option>
                  <option value="HIRE">HIRE SERVICES</option>
                  <option value="CARPENTRY">LABOUR SHUTTERING / CARPENTRY SERVICES</option>
                  <option value="bore">BORE WELL</option>
                  <option value="FLOORING">INTERIOR WORKS - CARPET & FLOORING</option>
                  <option value="CEMENT">CEMENT</option>
                  <option value="CHIPPING">LABOUR CHIPPING SERVICES</option>
                  <option value="CIVIL">CIVIL WORKS</option>
                  <option value="ADMIN">ADMIN SERVICES</option>
                  <option value="INTERNET">IT INTERNET SERVICES</option>
                  <option value="INTERNET">IT TELEPHONE SERVICES</option>
                  <option value="ELECTRONIC">ELECTRONIC / SOFTWARE / HARDWARE</option>
                  <option value="ELECTRONIC">IT SPARES</option>
                  <option value="ELECTRONIC">IT MATERIALS</option>
                  <option value="ELECTRONIC">IT SOFTWARE SERVICES</option>
                  <option value="CONTAINERS">CONTAINERS</option>
                  <option value="CONVEYANCE">FOOD&WATER EXPENSES SERVICES GROUP</option>
                  <option value="CONVEYANCE">LOCAL CONVEYENCE SERVICES GROUP</option>
                  <option value="CP">PLUMBING - PIPES &amp; FITTINGS / CP / SANITARY FITTINGS</option>
                  <option value="SANITARY">CP & SANITARY FITTINGS</option>
                  <option value="ONSKILLED">LABOUR ONSKILLED SERVICES</option>
                  <option value="LIASIONING">LIASIONING SERVICES</option>
                  <option value="MACHINERY">EQUIPMENTS / MACHINERY</option>
                  <option value="DOOR">DOOR FRAMES/ SHUTTERS (WOOD)</option>
                  <option value="LABOUR">LABOUR ELECTRICAL SERVICES</option>
                  <option value="MEP">MEP CONSULTANT SERVICES</option>
                  <option value="BOXES">ELECTRICAL PANELS / BOXES / DB</option>
                  <option value="ELECTRICALPANELS">ELECTRICAL PANELS</option>
                  <option value="ELECTRICAL WORKS">ELECTRICAL WORKS</option>
                  <option value="ELECTRICAL SWITCHES /FITTINGS">ELECTRICAL SWITCHES /FITTINGS</option>
                  <option value="ELECTRICAL WIRES/CABLES&CONDUI">ELECTRICAL WIRES, CABLES &amp; CONDUITS</option>
                  <option value="ELECTRICAL CABLES">ELECTRICAL CABLES</option>
                  <option value="HR SERVICES">HR SERVICES</option>
                  <option value="FABRICATION SUBCONTRACTORS">FABRICATION WORKS</option>
                  <option value="1050">INTER WORKS (PARTITION & FALSE CEILING)</option>
                  <option value="FINANCIAL SERVICES">FINANCIAL SERVICES</option>
                  <option value="FINANCIAL STATUTORY AUDIT SERVICES">FINANCIAL STATUTORY AUDIT SERVICES</option>
                  <option value="FINANCIAL TAX">FINANCIAL TAX AUDIT SERVICES</option>
                  <option value="FIRE FIGHTING WORKS">FIRE FIGHTING WORKS</option>
                  <option value="FIREFIGHTING CONSULTANT">FIREFIGHTING CONSULTANT SERVICES</option>
                  <option value="LABOUR FITTER SERVICES">LABOUR FITTER SERVICES</option>
                  <option value="FLY ASH">FLY ASH</option>
                  <option value="FORMWORK">FORMWORK & SCAFFOLDING MATERIALS</option>
                  <option value="FUELS & LUBRICANTS">FUELS & LUBRICANTS</option>
                  <option value="FURNITURE">FURNITURE</option>
                  <option value="GRANITE & MARBILE SUBCONTRACTO">GRANITE / MARBILE / KOTA WORKS</option>
                  <option value="GRANITE / MARBLE / KOTA SUPPLI">GRANITE / MARBILE / KOTA MATERIAL - ALREADY THERE IN 34</option>
                  <option value="GRANITE LABOUR SUBCONTRACTOR">LABOUR GRANITE SERVICES</option>
                  <option value="HARDWARE ITEMS">HARDWARE ITEMS / LOCKS/&nbsp; OTHER HARDWARES / GENERAL CONSUMABLES</option>
                  <option value="HARDWARE ITEMS">RCC HUME PIPES</option>
                  <option value="HARDWARE ITEMS">SHEETS &amp; PIPES</option>
                  <option value="HVAC CONSULTANT SERVICES">HVAC CONSULTANT SERVICES</option>
                  <option value="HVAC SUBCONTRACTORS">HVAC WORKS</option>
                  <option value="KHALASI LABOUR SUBCONTRACTOR">LABOUR KHALASI SERVICES</option>
                  <option value="LAND">LAND</option>
                  <option value="LAND SCAPE SUBCONTRACTORS">LAND SCAPE WORKS</option>
                  <option value="LANDSCAPING CONSULTANT">LANDSCAPE CONSULTANT SERVICES</option>
                  <option value="LEGAL SERVICES">LEGAL SERVICES</option>
                  <option value="LIFT SUBCONTRACTORS">LIFT WORKS</option>
                  <option value="LOUVER WORKS SUBCONTRACTOR">LOUVER WORKS</option>
                  <option value="MANHOLE COVERS">PLUMBING - MANHOLE COVERS</option>
                  <option value="MANSONRY LABOUR SUBCONTRACTOR">LABOUR MASONRY SERVICES</option>
                  <option value="MARKETING EXHIBITIONS">MARKETING EVENTS AND EXHIBITION</option>
                  <option value="MARKETING OUTDOOR AGENCY">MARKETING OUTDOOR</option>
                  <option value="MARKETING OUTDOOR AGENCY">MARKETING AGENCY FEE</option>
                  <option value="MARKETING SPONSORSHIP">MARKETING DONATIONS & SPONSORS AND OTHERS</option>
                  <option value="MODEL MAKING VENDOR">MINIATURE MODEL SERVICES</option>
                  <option value="MODULAR KITCHEN SUBCONTRACTOR">MODULAR KITCHEN WORKS</option>
                  <option value="P&M SPARES">P & M SPARES</option>
                  <option value="P&M SPARES">VEHICLE SPARES</option>
                  <option value="P&M SPARES">P & M ACCESSORIES</option>
                  <option value="P&M SPARES">VEHICLE  MAINTENANCE SERVICES</option>
                  <option value="TILING - LABOUR SUBCONTRACTOR">LABOUR PAINTING SERVICES</option>
                  <option value="PAINTING SUBCONTRACTORS">PAINTING WORKS</option>
                  <option value="PAINTS">PAINTS</option>
                  <option value="PILING SUBCONTRACTORS">PILING WORKS</option>
                  <option value="PLUMBING - LABOUR SUBCONTRACTO">PLUMBING WORKS</option>
                  <option value="PLUMBING - LABOUR SUBCONTRACTO">LABOUR PLUMBING SERVICES</option>
                  <option value="PLUMBING/PIPES&FITTINGS">MEP SPARES</option>
                  <option value="PLUMBING/PIPES&FITTINGS">PLUMBING - PIPES ABOVE 200MM &amp; TANKS</option>
                  <option value="WOOD ITEMS / PLYWOOD">WOOD ITEMS / PLYWOOD/ SILVERWOOD / PINEWOOD/ OTHER WOOD</option>
                  <option value="POLISHING LABOUR SUBCONTRACTOR">LABOUR POLISHING SERVICES</option>
                  <option value="POLISHING LABOUR SUBCONTRACTOR">PRINTING & STATIONERY ITEMS</option>
                  <option value="POLISHING LABOUR SUBCONTRACTOR">HOUSE KEEPING MATERIAL</option>
                  <option value="2POLISHING LABOUR SUBCONTRACTOR054">ADMIN PRINTING SERVICES</option>
                  <option value="PRODUCTION AGENCY">MARKETING PRINTING</option>
                  <option value="QUALITY CONSULTANT">QUALITY CONTROL CONSULTANT SERVICES</option>
                  <option value="QUALITY CONSULTANT">PMC CONSULTANT SERVICES</option>
                  <option value="SOLID/PAVER/FLYASH BRICKS">BLOCKS & BRICKS</option>
                  <option value="RENTAL">TRAVEL EXPENSES SERVICES GROUP</option>
                  <option value="RENTAL">PROPERTY RENTAL SRVICES GROUP</option>
                  <option value="RMC">RMC</option>
                  <option value="SAFETY ITEM SUPPLIERS">SAFETY ITEMS / HELMETS/ SAFET JACKETS/ OTHER SAFETY ITEMS</option>
                  <option value="SAND">SAND</option>
                  <option value="SOIL">SOIL</option>
                  <option value="SPORTS FACILITIES SUBCONTRACTO">PLAY & SPORTS FACILITIES</option>
                  <option value="SS RILING SUBCONTRACTO">GRILL / SS RAILING WORKS</option>
                  <option value="STAFF WELFARE">HOUSEKEEPING SERVICES</option>
                  <option value="STAFF WELFARE">SECURITY SERVICES</option>
                  <option value="STAFF WELFARE">POOJA EXPENSES SERVICES GROUP</option>
                  <option value="STAFF WELFARE">STAFF WELFARE SERVICES GROUP</option>
                  <option value="STAFF WELFARE">ADMIN COURIER SERVICES</option>
                  <option value="STEEL">STEEL</option>
                  <option value="STP/WTP/RO SUBCONTRACTORS&SUPP">TREATMENT PLANTS - STP, WTP &amp; RO</option>
                  <option value="STP/WTP/RO SUBCONTRACTORS&SUPP">TREATMENT PLANTS - ACCESSORIES</option>
                  <option value="STRUCTURAL CONSULTANT">STRUCTURAL CONSULTANT SERVICES</option>
                  <option value="STRUCTURAL GLAZING SUBCONTRACT">STRUCTURAL GLAZING WORKS</option>
                  <option value="SURVEY SUBCONTRACTORS">SURVEY WORKS</option>
                  <option value="SWIMMING POOL SUBCONTRACTORS">SWIMING POOL WORKS</option>
                  <option value="TILES">TILES</option>
                  <option value="TILING - LABOUR SUBCONTRACTOR">LABOUR TILING SERVICES</option>
                  <option value="JOINERY UPVC SUBCONTRACTORS">JOINERY UPVC / SERVICES</option>
                  <option value="WATER">WATER</option>
                  <option value="WATER PROOFING CHEMICALS">WATERPROOFING & CONSTRUCTION CHEMICALS</option>
                  <option value="WATER PROOFING CHEMICALS">CHEMICAL MATERIAL GROUP</option>
                  <option value="WATER PROOFING ">WATER PROOFING WORKS</option>
                  {/* 
                  <option value="WELDING LABOUR SUBCONTRACTOR">LABOUR WEILDING SERVICES</option>
                  */}
               </select>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Type of Business*</p>
            </div>
            <div className="select">
               <select id="secondDropdown"  name="secondropdown" type="select">
                  <option value="">Select Option</option>
               </select>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Contact Person*</p>
            </div>
            <div className="select">
               <input class="input-fieldr" type="text" placeholder="Enter Contact Person" name="contactr" required/>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Contact Number (Mobile)*</p>
            </div>
            <div className="select">
               <input class="input-fieldr" type="text" placeholder="Enter your Mobile Number" name="mobiler" required/>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">Email*</p>
            </div>
            <div className="select ">
               <input class="input-fieldr" type="email" placeholder="Enter your Email" name="emailr" required/>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p className="pName">State*</p>
            </div>
            <div className="select">
               <input class="input-fieldr" type="text" placeholder="Enter your State" name="stater" required/>
            </div>
         </div>
         <div class="input-container1">
            <div className="p-div">
               <p  className="pName">City*</p>
            </div>
            <div className="select">
               <input class="input-fieldr" type="text" placeholder="Enter your City" name="cityr" required/>
            </div>
         </div>
         <button type="submit" value="send" class="btn" style={style}>
          {loading?<Loader size={25} color={'#fff'}/>:<>
         {state.message&&'Retry'||'Submit'}
         </>}</button>
      </form>
   </div>
</div>
<div className="minifooter">
   <p className="copy">
      Copyright © 2023 VGN Projects Estates Pvt Ltd, All Rights Reserved
   </p>
</div>
</>
)
}
export default Registration;