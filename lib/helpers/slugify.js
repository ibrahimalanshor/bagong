module.exports = str => str.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s/g, '-')