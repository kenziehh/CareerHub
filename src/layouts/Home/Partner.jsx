import ubLogo from "/assets/images/ub.png";
import itbLogo from "/assets/images/itb.png";
import itsLogo from "/assets/images/its.png";
import uiLogo from "/assets/images/ui.png";
import ipbLogo from "/assets/images/ipb.png";
import ugmLogo from "/assets/images/ugm.png";

export default function Partner() {
  return (
    <section className="container text-center py-16 space-y-[4rem]">
      <h2>
        Universitas yang <br /> sudah bekerja sama
      </h2>
      <div className="flex flex-wrap gap-14 items-center justify-center">
        <img src={ubLogo} alt="logo-ub" className=""/>
        <img src={itbLogo} alt="logo-itb" className=""/>
        <img src={itsLogo} alt="logo-its" className=""/>
        <img src={uiLogo} alt="logo-ui" className=""/>
        <img src={ipbLogo} alt="logo-ipb" className=""/>
        <img src={ugmLogo} alt="logo-ugm" className=""/>
      </div>
    </section>
  );
}
