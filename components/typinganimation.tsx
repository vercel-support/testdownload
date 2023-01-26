import { TypeAnimation } from "react-type-animation";

function TypingAnimation() {

    return (

        <TypeAnimation
                sequence={[
                  2000,
                  "Bonjour",
                  2000,
                  "Guten Tag",
                  2000,
                  "Buongiorno",
                  2000,
                  "Buenos días",
                  2000,
                  "Hello",
                  2000,
                  "Bom dia",
                  2000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={45}
                className={"font-body font-bold text-xl md:text-3xl lg:text-4xl text-conversly_color-snow z-50"}
              />

    );
  }
  
  export default TypingAnimation;
  