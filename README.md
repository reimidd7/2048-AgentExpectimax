# 2048 - AgentExpectimax

A small clone of [1024](https://play.google.com/store/apps/details?id=com.veewo.a1024), based on [Saming's 2048](http://saming.fr/p/2048/) (also a clone).
Made just for fun. [Play the original game here!](http://gabrielecirulli.github.io/2048/)

The official app can also be found on the [Play Store](https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048) and [App Store!](https://itunes.apple.com/us/app/2048-by-gabriele-cirulli/id868076805)

## Live Demo

You can play the adjusted version of the game with the AgentExpectimax AI [here](https://reimidd7.github.io/2048-AgentExpectimax/).

## Adjustments Made

This version of the 2048 game has been adjusted to meet specific project requirements. The following changes have been made to the original code:

1. The `AgentBrain` has been updated to allow placing new tiles in specific locations instead of randomly.
2. The `Agent selectMove` function has been modified to run a depth-limited expectimax algorithm from the current state using a custom evaluation function.
3. The agent's parameters have been fine-tuned to improve its performance and increase its chances of reaching the 2048 tile.

The specific adjustments were made to build a sophisticated agent that plays 2048 expertly, gain experience with the expectimax algorithm in a context where the game tree cannot be completely explored, and evaluate non-terminal game states using an evaluation heuristic.

The evaluation function used in this implementation takes into account various factors such as the distribution of tiles on the board, the smoothness of the grid, and the presence of empty cells. It assigns higher scores to game states that are more likely to lead to successful outcomes.

# ReadMe from Cloned Repo

### Contributions

[Anna Harren](https://github.com/iirelu/) and [sigod](https://github.com/sigod) are maintainers for this repository.

Other notable contributors:
 - [TimPetricola](https://github.com/TimPetricola) added best score storage
 - [chrisprice](https://github.com/chrisprice) added custom code for swipe handling on mobile
 - [marcingajda](https://github.com/marcingajda) made swipes work on Windows Phone
 - [mgarciaisaia](https://github.com/mgarciaisaia) added support for Android 2.3

Many thanks to [rayhaanj](https://github.com/rayhaanj), [Mechazawa](https://github.com/Mechazawa), [grant](https://github.com/grant), [remram44](https://github.com/remram44) and [ghoullier](https://github.com/ghoullier) for the many other good contributions.

### Screenshot

<p align="center">
  <img src="http://pictures.gabrielecirulli.com/2048-20140309-234100.png" alt="Screenshot"/>
</p>

That screenshot is fake, by the way. I never reached 2048 :smile:

## Contributing

Changes and improvements are more than welcome! Feel free to fork and open a pull request. Please make your changes in a specific branch and request to pull into `master`! If you can, please make sure the game fully works before sending the PR, as that will help speed up the process.

You can find the same information in the [contributing guide.](https://github.com/gabrielecirulli/2048/blob/master/CONTRIBUTING.md)

## License

2048 is licensed under the [MIT license.](https://github.com/gabrielecirulli/2048/blob/master/LICENSE.txt)

## Donations

I made this in my spare time, and it's hosted on GitHub (which means I don't have any hosting costs), but if you enjoyed the game and feel like buying me coffee, you can donate at my BTC address: `1Ec6onfsQmoP9kkL3zkpB6c5sA4PVcXU2i`. Thank you very much!
