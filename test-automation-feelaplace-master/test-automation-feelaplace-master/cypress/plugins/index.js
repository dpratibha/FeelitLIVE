// ...
const path = require("path")
const gmail = require("gmail-tester")

let AWS = require('aws-sdk');

const parser = require('simple-excel-to-json')

let _ = require('lodash')


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  // ...

  on("task", {
    "read-excel": async args => {
      const { filePath } = args;
      let doc = parser.parseXls2Json(filePath)

      return doc
    }
  })

  on("task", {
    "gmail:check": async args => {
      const { from, to, subject } = args;
      const email = await gmail.check_inbox(
        path.resolve(__dirname, "credentials.json"), // credentials.json is inside plugins/ directory.
        path.resolve(__dirname, "gmail_token.json"),// gmail_token.json is inside plugins/ directory.
        {
          subject: args.subject,
          from: args.from,
          to: args.to,
          wait_time_sec:10,     // Poll interval (in seconds)
          max_wait_time_sec:30  // Maximum poll interval (in seconds). If reached, return null, indicating the completion of the task().

        } 
                                         
      )
      return email
    }
  })

  on("task", {
    "gmail:get-messages": async args => {
      const messages = await gmail.get_messages(
        path.resolve(__dirname, "credentials.json"),
        path.resolve(__dirname, "gmail_token.json"),
        args.options
      );
      return messages;
    }
  })
}

