import { TypeAnimation } from 'react-type-animation';

const TextEffects = () => {
    return (
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'at the best price',
            1500, // wait 1s before replacing "Mice" with "Hamsters"
            'with unique food',
            1500,
            'with nice location',
            1500
          ]}
          wrapper="span"
          speed={50}
          className='text-xl md:text-3xl text-green-500 font-bold lowercase'
          repeat={Infinity}
        />
      );
}

export default TextEffects