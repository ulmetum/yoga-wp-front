const yogaSentences = [
  'El cuerpo es un reflejo de la mente, y en la práctica encontramos que cada respiración, cada movimiento, es una oportunidad para sanar, crecer y entendernos mejor.',
  'La verdadera transformación no está en la postura perfecta, sino en la conciencia que adquirimos mientras practicamos, en cada respiración, en cada gesto que hacemos.',
  'El yoga no trata de escapar del caos, sino de aprender a encontrar calma en medio de él, recordándonos que la paz interior no depende de lo que sucede afuera, sino de lo que elegimos cultivar dentro de nosotros.',
  'En el proceso de aprender a sostener una postura, descubrimos que lo más importante no es la flexibilidad del cuerpo, sino la flexibilidad de la mente para aceptar lo que está sucediendo en el momento.',
  'A través del movimiento consciente y la respiración, aprendemos que no se trata de llegar a un destino, sino de disfrutar el camino, de estar presentes en cada momento y de aprender a vivir con gracia.',
  'Cada postura es una metáfora de la vida: nos desafía, nos muestra nuestras limitaciones, pero también nos enseña a ser pacientes, a escuchar y a aceptar nuestra vulnerabilidad.',
  'El verdadero poder no se encuentra en la fuerza física, sino en la capacidad de ser plenamente consciente de lo que está sucediendo dentro y fuera de nosotros, de aprender a fluir con la vida en lugar de resistirnos a ella.',
  'El equilibrio no es algo que buscamos, es algo que creamos dentro de nosotros mismos al aprender a combinar esfuerzo y entrega, disciplina y flexibilidad, mente y cuerpo en perfecta armonía.',
  'La práctica nos enseña a soltar todo lo que ya no nos sirve, a liberar el peso del pasado y a aceptar lo que viene con los brazos abiertos, sabiendo que todo es parte del proceso de evolución.',
  'El yoga nos recuerda que la paz no es un lugar al que llegamos, sino un estado que cultivamos día a día, aprendiendo a abrazar tanto lo que nos gusta como lo que no entendemos de nosotros mismos.',
  'A medida que nuestra práctica avanza, nos damos cuenta de que lo que parecía ser una simple postura física es en realidad una puerta abierta a la reflexión, a la conexión profunda con nuestro ser más auténtico.',
  'En cada momento de calma, encontramos el espacio para dejar ir el estrés, las preocupaciones y las tensiones, permitiendo que la energía fluya libremente a través de nuestro cuerpo y nuestra mente.',
  'La respiración consciente es un ancla que nos mantiene en el presente, que nos recuerda que cada momento es único y que, a través de la atención plena, podemos encontrar paz y claridad en medio de cualquier tormenta.',
  'La práctica del yoga no solo fortalece el cuerpo, sino también el espíritu, enseñándonos a ser más compasivos, a estar más presentes y a vivir con una actitud de gratitud hacia todo lo que la vida nos ofrece.',
  'Cada vez que nos encontramos con una dificultad en la práctica, se nos presenta la oportunidad de aprender algo nuevo sobre nosotros mismos, de superar nuestros miedos y limitaciones con paciencia y perseverancia.',
  'El yoga es un acto de amor propio, un espacio en el que nos permitimos ser vulnerables, conectar con nuestro interior y recordar que la verdadera fortaleza proviene de la aceptación y la autocompasión.',
  'En la quietud de una postura mantenida, encontramos que el mayor desafío no es el cuerpo, sino la mente que intenta escapar del momento presente. Aprendemos a estar cómodos con lo incómodo.',
  'Cada vez que nos adentramos más en la práctica, nos damos cuenta de que el yoga no es solo un conjunto de ejercicios, sino una forma de vida, un camino hacia la conexión plena con todo lo que nos rodea.',
]

export const getRandomYogaSentence = () =>
  yogaSentences[Math.floor(Math.random() * yogaSentences.length)]
