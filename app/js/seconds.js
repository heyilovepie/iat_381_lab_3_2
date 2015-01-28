var ExampleApplication = React.createClass({
        render: function() {
          var elapsed = Math.round(this.props.elapsed  / 100);
          var time = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
          var seconds = parseInt(time);
          var message =
            "You've been staring at this for " + seconds + " seconds. Please go away.";

          return React.DOM.p(null, message);
        }
      });

      // Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
      var ExampleApplicationFactory = React.createFactory(ExampleApplication);

      var start = new Date().getTime();
      setInterval(function() {
        React.render(
          ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
          document.getElementById('container')
        );
      }, 50);