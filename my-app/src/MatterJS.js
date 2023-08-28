import React, { useEffect, useRef } from 'react'
import { Engine, Render, Bodies, World, Composite, Composites, Common, Runner } from 'matter-js'

var isRan = false;

function MatterJS (props) {
  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  useEffect(() => {

    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, ch/2-1223, cw, 20, { isStatic: true, render: { fillStyle: '#ffffff' } }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
    }
  }, [])

  // const handleDown = () => {
  //   isPressed.current = true
  // }

  // const handleUp = () => {
  //   isPressed.current = false
  // }

  // const handleAddCircle = e => {
  //   if (isPressed.current) {
  //      const ranColor = Math.floor(Math.random() * 255)
  //      const ranColor2 = Math.floor(Math.random() * 255)
  //      const ranColor3 = Math.floor(Math.random() * 255)
       
  //     const ball = Bodies.circle(
  //       e.clientX,
  //       e.clientY,
  //       10 + Math.random() * 30,
  //       {
  //         mass: 10,
  //         restitution: 0.9,
  //         friction: 0.005,
  //         render: {
  //           fillStyle: `rgb(${ranColor},${ranColor2},${ranColor3})`
  //         }
  //       })
  //     Composite.add(engine.current.world, [ball])
  //   }
  // }

  const addBall = () => {
    const ranColor = Math.floor(Math.random() * 255)
    const ranColor2 = Math.floor(Math.random() * 255)
    const ranColor3 = Math.floor(Math.random() * 255)

    const colorsPick = ['#dd2020', '#662e9b', '#67c56e', '#2d84fb', '#f89d36'];
  //   var stack = Composites.stack(20, 20, 2, 5, 0, 0, function(x, y) {
  //     return Bodies.circle(x, y, Common.random(10, 20), { friction: 0.00001, restitution: 0.5, density: 0.001 });
  // });

    var ball = Bodies.polygon(Common.random(50, 100), -150, Common.random(3, 4), Common.random(10, 40), {
      friction: 0.1,
      restitution: 1.1,
      density: 0.5,
    	render: {
        fillStyle: colorsPick[Math.floor(Math.random() * 5)],     
    
      }
    });

  // Runner.run(engine.current, [stack.bodies[0]])
  console.log('ball')
    
    Composite.add(engine.current.world, [ball])

    
    engine.current.timing.timeScale = 0.6;

}

const ballsDrop = () => {
  if(!isRan) {
    isRan = true;

   const droppingBalls = setInterval(() => {addBall()}, 100);
    setTimeout(() => {
      clearInterval(droppingBalls)
    }, 20000)
  }
}

  return(
    <div
      // onMouseDown={handleDown}
      // onMouseUp={handleUp}
      // onMouseMove={handleAddCircle}
      onLoad={ballsDrop()}
    >
      <div ref={scene} style={{ width: '100%', height: '100%', position: 'absolute' }} />
    </div>
  )
  
}

export default MatterJS