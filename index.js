//Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}


function fuzzyMatch(drivers, name) {
    const lowerName = name.toLowerCase();
    return drivers.filter(driver => {
      const lowerDriver = driver.toLowerCase();
      return lowerDriver.startsWith(lowerName);
    });
  }

  function matchName(drivers, name) {
      return drivers.filter(driver => driver.name === name);
  }