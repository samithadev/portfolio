import './SpinText.css'

export default function SpinText() {

  return (
    <div class="main">
    <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
      <defs>
        <path id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
        </path>
      </defs>
      <text width="400">
        <textPath alignment-baseline="top" href="#circle" class="text">
          Samitha Wickramasinghe Full Stack Developer 👀
        </textPath>
      </text>
    </svg>
  </div>
  );
}
