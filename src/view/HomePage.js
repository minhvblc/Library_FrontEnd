import React, { useState } from "react";
import {
  AtlassianNavigation,
  PrimaryButton,
  ProductHome,
} from "@atlaskit/atlassian-navigation";
import Button from "@atlaskit/button";
const ProductHomeExample = () => (
    <ProductHome icon={AtlassianIcon} logo={AtlassianLogo} />
  );
function HomePage() {
  return (
    <div>
        <AtlassianNavigation label = "Test" 
        renderProductHome={ProductHomeExample}
         primaryItems={[
            <Button>This is a test</Button>,
            <PrimaryButton>Issues</PrimaryButton>,
            
          ]}/>
    </div>
  );
}
export default HomePage;
