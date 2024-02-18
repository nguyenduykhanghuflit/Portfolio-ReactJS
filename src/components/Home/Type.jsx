import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
   return (
      <Typewriter
         options={{
            strings: [
               "I'M .NET Developer",
               'Familiar with SQL Server',
               'Experience with NodeJS & ReactJS',
               'Effective Problem Solver',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
         }}
      />
   );
};

export default Type;
