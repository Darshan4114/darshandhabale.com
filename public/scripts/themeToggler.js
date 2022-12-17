var select = function(s) {
	return document.querySelector(s);
},
	selectAll = function(s) {
		return document.querySelectorAll(s);
	},
	hit = select('.hit'),
	allStars = selectAll('.starGroup *'),
	allClouds = selectAll('.cloud'),
	allCloudPuffs = selectAll('.cloud circle')



TweenMax.set('svg', {
	visibility: 'visible'
})
TweenMax.set(allStars, {
	transformOrigin: '50% 50%'
})
TweenLite.defaultEase = Elastic.easeOut.config(0.58, 0.8);
var tl = new TimelineMax({paused: true});
tl.staggerTo(['.sun', '.moonMask', '.moon'], 1, {
	cycle: {
		attr: [{cx: '-=140', cy: '-=20'}, {cx: '-=140', cy: '-=20'}, {cx: '-=90', cy: '-=0'}]
	}
}, 0)

	.staggerTo(['.moon', '.sun'], 1, {
		cycle: {
			alpha: [1, 0]
		}
	}, 0, '-=1')
	.to('body', 1, {
		//backgroundColor:'#2C3E7B'
	}, '-=1')
	.to('.outline', 1, {
		stroke: '#6172AD',
		fill: '#45568D'
	}, '-=1')

	.staggerFrom(allStars, 0.9, {
		cycle: {
			x: [-20, 30, 40, -30, 60, -40, 80, 90, 100, 110, 120]
		},
		alpha: 0
	}, 0.005, '-=1')

	.staggerTo(allClouds, 1, {
		cycle: {
			x: [40, 20]
		},
		alpha: 0
	}, 0, '-=1')

	.addPause()


	.staggerTo(['.sun', '.moonMask', '.moon'], 1, {
		cycle: {
			attr: [{cx: '+=140', cy: '+=20'}, {cx: '+=140', cy: '+=20'}, {cx: '+=90', cy: '+=0'}]
		}
	}, 0)
	.staggerTo(['.moon', '.sun'], 1, {
		cycle: {
			alpha: [0, 1]
		}
	}, 0, '-=1')
	.to('body', 1, {
		//backgroundColor:'#26D6FE',
		ease: Linear.easeNone
	}, '-=1')
	.to('.outline', 1, {
		stroke: '#FCFDFE',
		fill: '#85E8FE'
	}, '-=1')
	.staggerTo(allStars, 1, {
		alpha: 0
	}, 0, '-=1')
	.staggerFromTo(allClouds, 0.6, {
		cycle: {
			y: [120, 160],
			x: [0]
		}
	},
		{
			cycle: {
				y: [0],
				x: [0]
			},
			alpha: 1,
			immediateRender: false
		}, 0.06, '-=1')


	.from(['.plane', '.contrail'], 0.7, {
		x: -400,
		ease: Linear.easeNone
	}, '-=1')

	.to('.contrail', 0.5, {
		alpha: 0,
		ease: Sine.easeOut
	})



//ScrubGSAPTimeline(tl);

function clickToggle(e) {
	if (tl.time() > 0 && tl.time() < tl.duration()) {
		tl.play()
	} else {
		tl.play(0)
	}
}

tl.timeScale(1);
hit.onclick = clickToggle;
TweenMax.globalTimeScale(1.3);