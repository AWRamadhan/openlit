import PromptHub from './openai/openlit/prompt-hub';
import Vault from './openai/openlit/vault';

export default class BaseOpenlit {
  static getPrompts = PromptHub.getPrompts;
  static getSecrets = Vault.getSecrets;
}
