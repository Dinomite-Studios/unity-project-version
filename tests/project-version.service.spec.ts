import 'mocha';
import { expect } from 'chai';
import { ProjectVersionService } from '../lib/project-version.service';
import { UnityProjectVersion } from '../lib/project-version.model';

describe('ProjectVersionService.determineProjectVersionFromContent ',
    () => {
        it('empty string should return error', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('');
            const errorResult: UnityProjectVersion = {
                version: '',
                revision: '',
                isAlpha: false,
                isBeta: false,
                error: 'Unknown project version format encountered.'
            };

            expect(
                result.version === errorResult.version &&
                result.revision === errorResult.revision &&
                result.isAlpha === errorResult.isAlpha &&
                result.isBeta === errorResult.isBeta &&
                result.error === errorResult.error).to.equal(true);
        });
    });