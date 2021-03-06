/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
/* eslint-disable no-prototype-builtins */
/**
 * This client was automatically generated by Segment Typewriter. ** Do Not Edit **
 */

/**
 * Ajv is a peer dependency for development builds. It's used to apply run-time validation
 * to message payloads before passing them on to the underlying analytics instance.
 *
 * Note that the production bundle does not depend on Ajv.
 *
 * You can install it with: `npm install --save-dev ajv`.
 */
import Ajv from 'ajv'

import * as Segment from './segment'

export interface AccountRegistered {
  github_id: string
  type: string
}
export interface DocumentationViewed {
  category?: string
  title: string
}
export interface FormSubmitted {
  company?: string
  email: string
  first_name?: string
  form_name?: string
  implementing_payid?: string
  last_name?: string
  message?: string
  notify_future_developer_events?: string
  role?: string
}
export interface GithubNavigation {
  text?: string
  type: string
  url: string
}
export interface LoggedIn {
  type: string
}
export interface SandboxCreated {
  domain: string
  sandbox_id: string
}

export type ViolationHandler = (
  message: Record<string, any>,
  violations: Ajv.ErrorObject[],
) => void

/**
 * The default handler that is fired if none is supplied with setTypewriterOptions.
 * This handler will log a warning message to the console.
 */
export const defaultValidationErrorHandler: ViolationHandler = (
  message,
  violations,
) => {
  const msg = JSON.stringify(
    {
      type: 'Typewriter JSON Schema Validation Error',
      description:
        `You made an analytics call (${message.event}) using Typewriter that doesn't match the ` +
        'Tracking Plan spec.',
      errors: violations,
    },
    undefined,
    2,
  )

  console.warn(msg)
}

let onViolation = defaultValidationErrorHandler

let analytics: () => SegmentAnalytics.AnalyticsJS | undefined = () => {
  return window.analytics
}

/** Options to customize the runtime behavior of a Typewriter client. */
export interface TypewriterOptions {
  /**
   * Underlying analytics instance where analytics calls are forwarded on to.
   * Defaults to window.analytics.
   */
  analytics?: SegmentAnalytics.AnalyticsJS
  /**
   * Handler fired when if an event does not match its spec. This handler
   * does not fire in production mode, because it requires inlining the full
   * JSON Schema spec for each event in your Tracking Plan.
   *
   * By default, it will throw errors if NODE_ENV = "test" so that tests will fail
   * if a message does not match the spec. Otherwise, errors will be logged to stderr.
   */
  onViolation?: ViolationHandler
}

/**
 * Updates the run-time configuration of this Typewriter client.
 *
 * @param {TypewriterOptions} options - the options to upsert
 *
 * @typedef {Object} TypewriterOptions
 * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
 * 		calls are forwarded on to. Defaults to window.analytics.
 * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
 * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
 * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
 * 		will be logged to stderr.
 */
export function setTypewriterOptions(options: TypewriterOptions) {
  analytics = options.analytics
    ? () => options.analytics || window.analytics
    : analytics
  onViolation = options.onViolation || onViolation
}

/**
 * Validates a message against a JSON Schema using Ajv. If the message
 * is invalid, the `onViolation` handler will be called.
 */
function validateAgainstSchema(message: Record<string, any>, schema: object) {
  const ajv = new Ajv({ schemaId: 'auto', allErrors: true, verbose: true })
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'))
  ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-04.json'))

  if (!ajv.validate(schema, message) && ajv.errors) {
    onViolation(message, ajv.errors)
  }
}

/**
 * Helper to attach metadata on Typewriter to outbound requests.
 * This is used for attribution and debugging by the Segment team.
 */
function withTypewriterContext(message: Segment.Options = {}): Segment.Options {
  return {
    ...message,
    context: {
      ...(message.context || {}),
      typewriter: {
        language: 'typescript',
        version: '7.2.1',
      },
    },
  }
}

/**
 * @typedef AccountRegistered
 * @property {string} github_id -
 * @property {string} type -
 */
/**
 * @typedef DocumentationViewed
 * @property {string} [category] -
 * @property {string} title -
 */
/**
 * @typedef FormSubmitted
 * @property {string} [company] -
 * @property {string} email -
 * @property {string} [first_name] -
 * @property {string} [form_name] -
 * @property {string} [implementing_payid] -
 * @property {string} [last_name] -
 * @property {string} [message] -
 * @property {string} [notify_future_developer_events] -
 * @property {string} [role] -
 */
/**
 * @typedef GithubNavigation
 * @property {string} [text] -
 * @property {string} type -
 * @property {string} url -
 */
/**
 * @typedef LoggedIn
 * @property {string} type -
 */
/**
 * @typedef SandboxCreated
 * @property {string} domain -
 * @property {string} sandbox_id -
 */

/**
 * Fires a 'Account Registered' track call.
 *
 * @param {AccountRegistered} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function accountRegistered(
  props: AccountRegistered,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          github_id: {
            description: '',
            type: 'string',
          },
          type: {
            description: '',
            type: 'string',
          },
        },
        required: ['type', 'github_id'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Account Registered',
    type: 'object',
  }
  const message = {
    event: 'Account Registered',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track(
      'Account Registered',
      props || {},
      withTypewriterContext(options),
      callback,
    )
  }
}
/**
 * Fires a 'Documentation Viewed' track call.
 *
 * @param {DocumentationViewed} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function documentationViewed(
  props: DocumentationViewed,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          category: {
            description: '',
            type: 'string',
          },
          title: {
            description: '',
            type: 'string',
          },
        },
        required: ['title'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Documentation Viewed',
    type: 'object',
  }
  const message = {
    event: 'Documentation Viewed',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track(
      'Documentation Viewed',
      props || {},
      withTypewriterContext(options),
      callback,
    )
  }
}
/**
 * Fires a 'Form Submitted' track call.
 *
 * @param {FormSubmitted} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function formSubmitted(
  props: FormSubmitted,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          company: {
            description: '',
            type: 'string',
          },
          email: {
            description: '',
            type: 'string',
          },
          first_name: {
            description: '',
            type: 'string',
          },
          form_name: {
            description: '',
            type: 'string',
          },
          implementing_payid: {
            description: '',
            type: 'string',
          },
          last_name: {
            description: '',
            type: 'string',
          },
          message: {
            description: '',
            type: 'string',
          },
          notify_future_developer_events: {
            description: '',
            type: 'string',
          },
          role: {
            description: '',
            type: 'string',
          },
        },
        required: ['email'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Form Submitted',
    type: 'object',
  }
  const message = {
    event: 'Form Submitted',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track(
      'Form Submitted',
      props || {},
      withTypewriterContext(options),
      callback,
    )
  }
}
/**
 * Fires a 'Github Navigation' track call.
 *
 * @param {GithubNavigation} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function githubNavigation(
  props: GithubNavigation,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          text: {
            description: '',
            type: 'string',
          },
          type: {
            description: '',
            type: 'string',
          },
          url: {
            description: '',
            type: 'string',
          },
        },
        required: ['type', 'url'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Github Navigation',
    type: 'object',
  }
  const message = {
    event: 'Github Navigation',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track(
      'Github Navigation',
      props || {},
      withTypewriterContext(options),
      callback,
    )
  }
}
/**
 * Fires a 'Logged In' track call.
 *
 * @param {LoggedIn} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function loggedIn(
  props: LoggedIn,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          type: {
            description: '',
            type: 'string',
          },
        },
        required: ['type'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Logged In',
    type: 'object',
  }
  const message = {
    event: 'Logged In',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track('Logged In', props || {}, withTypewriterContext(options), callback)
  }
}
/**
 * Fires a 'Sandbox Created' track call.
 *
 * @param {SandboxCreated} props - The analytics properties that will be sent to Segment.
 * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
 * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
 * 		call is fired.
 */
export function sandboxCreated(
  props: SandboxCreated,
  options?: Segment.Options,
  callback?: Segment.Callback,
): void {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    labels: {},
    properties: {
      context: {},
      properties: {
        properties: {
          domain: {
            description: '',
            type: 'string',
          },
          sandbox_id: {
            description: '',
            type: 'string',
          },
        },
        required: ['domain', 'sandbox_id'],
        type: 'object',
      },
      traits: {
        type: 'object',
      },
    },
    required: ['properties'],
    title: 'Sandbox Created',
    type: 'object',
  }
  const message = {
    event: 'Sandbox Created',
    properties: props || {},
    options,
  }
  validateAgainstSchema(message, schema)

  const a = analytics()
  if (a) {
    a.track(
      'Sandbox Created',
      props || {},
      withTypewriterContext(options),
      callback,
    )
  }
}

const clientAPI = {
  /**
   * Updates the run-time configuration of this Typewriter client.
   *
   * @param {TypewriterOptions} options - the options to upsert
   *
   * @typedef {Object} TypewriterOptions
   * @property {Segment.AnalyticsJS} [analytics] - Underlying analytics instance where analytics
   * 		calls are forwarded on to. Defaults to window.analytics.
   * @property {Function} [onViolation] - Handler fired when if an event does not match its spec. This handler does not fire in
   * 		production mode, because it requires inlining the full JSON Schema spec for each event in your Tracking Plan. By default,
   * 		it will throw errors if NODE_ENV="test" so that tests will fail if a message does not match the spec. Otherwise, errors
   * 		will be logged to stderr.
   */
  setTypewriterOptions,
  /**
   * Fires a 'Account Registered' track call.
   *
   * @param {AccountRegistered} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  accountRegistered,
  /**
   * Fires a 'Documentation Viewed' track call.
   *
   * @param {DocumentationViewed} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  documentationViewed,
  /**
   * Fires a 'Form Submitted' track call.
   *
   * @param {FormSubmitted} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  formSubmitted,
  /**
   * Fires a 'Github Navigation' track call.
   *
   * @param {GithubNavigation} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  githubNavigation,
  /**
   * Fires a 'Logged In' track call.
   *
   * @param {LoggedIn} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  loggedIn,
  /**
   * Fires a 'Sandbox Created' track call.
   *
   * @param {SandboxCreated} props - The analytics properties that will be sent to Segment.
   * @param {Object} [options] - A dictionary of options. For example, enable or disable specific destinations for the call.
   * @param {Function} [callback] - An optional callback called after a short timeout after the analytics
   * 		call is fired.
   */
  sandboxCreated,
}

export default new Proxy<typeof clientAPI>(clientAPI, {
  get(target, method) {
    if (typeof method === 'string' && target.hasOwnProperty(method)) {
      return target[method as keyof typeof clientAPI]
    }

    return () => {
      console.warn(`⚠️  You made an analytics call (${String(
        method,
      )}) that can't be found. Either:
    a) Re-generate your typewriter client: \`npx typewriter\`
    b) Add it to your Tracking Plan: https://app.segment.com/ripplex/protocols/tracking-plans/rs_1ibhNXCFfrXSwj4y7YNiWCRf27l`)
      const a = analytics()
      if (a) {
        a.track(
          'Unknown Analytics Call Fired',
          {
            method,
          },
          withTypewriterContext(),
        )
      }
    }
  },
})
