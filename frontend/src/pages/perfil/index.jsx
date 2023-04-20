import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "../../components/Footer";
import DatosPersonales from "@/components/MiCuenta/DatosPersonales";
import MisCampanas from "@/components/MiCuenta/MisCampanas";
import MisColaboraciones from "@/components/MiCuenta/MisColaboracion";
import MisDatos from "@/components/MiCuenta/MisDatos";
import MisFinanciamientos from "@/components/MiCuenta/MisFinanciamientos";

const Index = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (component) => {
    setActiveComponent(component);
  };
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "DatosPersonales":
        return <DatosPersonales />;
      case "MisCampanas":
        return <MisCampanas />;
      case "MisColaboraciones":
        return <MisColaboraciones />;
      case "MisFinanciamientos":
        return <MisFinanciamientos />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-between ">
        <Navbar />

        <div style={{ display: "flex", marginTop: "100px" }}>
          <div>
            <MisDatos renderComponent={renderComponent} data={data} />
          </div>
          <div style={{ flex: 4 }}>{renderActiveComponent()}</div>
        </div>

        <main className="w-[95%]  sm:w-[90%] md:w-[90%] mx-auto  lg:w-[85%]  lg:max-w-[1240px]  lg:mx-auto  ">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
