import 'mocha';
import { expect } from 'chai';
import { ProjectVersionService } from '../lib/project-version.service';
import { UnityProjectVersion } from '../lib/project-version.model';

describe('ProjectVersionService.determineProjectVersionFromContent ',
    () => {
        it('Invalid file path should return error', () => {
            const result = ProjectVersionService.determineProjectVersionFromFile('XYZ:\\This\\Path\\Does\\Not\\Exist');

            expect(result.error !== undefined).to.equal(true);
        });

        it('Test ProjectVersion.txt should return 2020.2.0f1 (3721df5a8b28) stable', () => {
            const result = ProjectVersionService.determineProjectVersionFromFile(__dirname);
            const expectedResult: UnityProjectVersion = {
                version: '2020.2.0f1',
                revision: '3721df5a8b28',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('empty string should return error', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('');

            expect(result.error !== undefined).to.equal(true);
        });

        it('should return 2017.1.0f1 stable', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2017.1.0f1');
            const expectedResult: UnityProjectVersion = {
                version: '2017.1.0f1',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2017.2.0a1 alpha', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2017.2.0a1');
            const expectedResult: UnityProjectVersion = {
                version: '2017.2.0a1',
                isAlpha: true,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2017.3.7b1 beta', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2017.3.7b1');
            const expectedResult: UnityProjectVersion = {
                version: '2017.3.7b1',
                isAlpha: false,
                isBeta: true
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 5.3.1f1 stable', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 5.3.1f1');
            const expectedResult: UnityProjectVersion = {
                version: '5.3.1f1',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 5.3.1p3 stable', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 5.3.1p3');
            const expectedResult: UnityProjectVersion = {
                version: '5.3.1p3',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 5.3.7f1 stable when standard assets are in project', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 5.3.7f1\nm_StandardAssetsVersion: 0');
            const expectedResult: UnityProjectVersion = {
                version: '5.3.7f1',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2020.1.6f1 (fc477ca6df10) stable', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2020.1.6f1\nm_EditorVersionWithRevision: 2020.1.6f1 (fc477ca6df10)');
            const expectedResult: UnityProjectVersion = {
                version: '2020.1.6f1',
                revision: 'fc477ca6df10',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2019.4.17f1 (123456abcd) stable when standard assets are in project', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2019.4.17f1\nm_EditorVersionWithRevision: 2019.4.17f1 (123456abcd)\nm_StandardAssetsVersion: 0');
            const expectedResult: UnityProjectVersion = {
                version: '2019.4.17f1',
                revision: '123456abcd',
                isAlpha: false,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2021.1.0b1 (fc123ca634gfd0) beta', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2021.1.0b1\nm_EditorVersionWithRevision: 2021.1.0b1 (fc123ca634gfd0)');
            const expectedResult: UnityProjectVersion = {
                version: '2021.1.0b1',
                revision: 'fc123ca634gfd0',
                isAlpha: false,
                isBeta: true
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });

        it('should return 2021.2.0a1 (fc123ca634gfd0) alpha', () => {
            const result = ProjectVersionService.determineProjectVersionFromContent('m_EditorVersion: 2021.2.0a1\nm_EditorVersionWithRevision: 2021.2.0a1 (fc123ca634gfd0)');
            const expectedResult: UnityProjectVersion = {
                version: '2021.2.0a1',
                revision: 'fc123ca634gfd0',
                isAlpha: true,
                isBeta: false
            };

            expect(resultsAreEqual(result, expectedResult)).to.equal(true);
        });
    });

function resultsAreEqual(a: UnityProjectVersion, b: UnityProjectVersion): boolean {
    return a.version === b.version &&
        a.revision === b.revision &&
        a.isAlpha === b.isAlpha &&
        a.isBeta === b.isBeta &&
        a.error === b.error
};