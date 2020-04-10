import axios from 'axios'

const base = 'http://live-thecaverns.pantheonsite.io/wp-json'

module.exports = async (req, res, next) => {
  // if this is a file route it will have a '.' in it so just go to next
  // we could probably do something smarter than this
  if (req.originalUrl.indexOf('.') >= 0) {
    return next()
  }

  try {
    // Get the data from the Wordpress Api
    const menu = await axios.get(`${base}/wp-api-menus/v2/menus/3`, {
      headers: {
        ...Object.keys(req.headers)
          .filter(k => k.includes('cookie'))
          .reduce((total, k) => ({ ...total, [k]: req.headers[k] }), {}),
        'Content-Type': 'application/json',
      },
      validateStatus: () => true,
    })

    const pageUrl = req.path === '/' ? '/home' : req.path

    const pageData = await axios.get(
      `${base}/wp/v2/pages?slug=${pageUrl.replace(/^\/+/g, '')}`,
      {
        headers: {
          ...Object.keys(req.headers)
            .filter(k => k.includes('cookie'))
            .reduce((total, k) => ({ ...total, [k]: req.headers[k] }), {}),
          'Content-Type': 'application/json',
        },
        validateStatus: () => true,
      }
    )

    const pageResponseData = Array.isArray(pageData.data)
      ? pageData.data[0]
      : pageData.data

    // Stuff the data into the request
    req.pageData = pageResponseData
    req.menu = menu.data.items

    res.status(pageData.status)

    return next()
  } catch (error) {
    console.error(error)
    next(error)
  }
}
